import React, { useState } from "react";
import "../Style/Style.css";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";

const Form = ({ Todos, SetTodos, setselected, textEdit, setTextEdit }) => {
  const [textType, settext] = useState("");
  // controll form handler
  const inputHandler = e => {
    settext(e.target.value);
  };
  const submiteTodoHandler = e => {
    e.preventDefault();
    if (textType === "") {
      alert("Text Field is empty");
    } else {
      if (textEdit !== undefined) {
        SetTodos(
          Todos.map(todo => {
            if (todo.id === textEdit.id) {
              return {
                ...todo,
                text: textType,
              };
            }
            return todo;
          })
        );
      } else {
        SetTodos([
          ...Todos,
          {
            text: textType,
            completed: false,
            id: Math.random() * 1000,
            date: Date(),
          },
        ]);
      }
      setTextEdit(undefined);
      settext("");
    }
  };
  const selectedHandler = e => {
    setselected(e.target.value);
  };
  return (
    <form>
      <div className="grop__input">
        <input
          value={textType}
          type="text"
          className="input__"
          placeholder="Typing stuff to do"
          onChange={inputHandler}
        />
        <button
          className="BTN__input"
          onClick={submiteTodoHandler}
          type="submit"
        >
          <i className="icons">
            {textEdit !== undefined ? (
              <AiIcons.AiOutlineEdit />
            ) : (
              <IoIcons.IoMdAddCircleOutline />
            )}
          </i>
        </button>
        {textEdit !== undefined && (
          <button
            className="BTN__input cancel"
            onClick={() => setTextEdit(undefined)}
          >
            <i className="icons">
              <ImIcons.ImCancelCircle />
            </i>
          </button>
        )}
      </div>
      <div className="select">
        <select
          name="Todos"
          className="filter__todo"
          onChange={selectedHandler}
        >
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
