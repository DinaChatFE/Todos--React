import React, { useState, useEffect, useRef } from "react";
import Form from "./Components/Form";
import List from "./Components/List";
import "./Style/Style.css";
import { getlocolhost, savelocalhost } from "./storage/localstorage";

function App() {
  const [Todos, SetTodos] = useState([]);
  const [selelted, setselected] = useState("all");
  const [filter, setfilter] = useState([]);

  // set state edit
  const [textEdit, setTextEdit] = useState(undefined);
  // state counting
  // set counting in list
  const [countingcompleted, setcountingcompleted] = useState("0");

  //  Useffects
  useEffect(() => {
    // get from localhost when app is effected
    getlocolhost(SetTodos);
  }, []);

  // prevent warning in call useEffect, create ref with  null function in initail state
  const filterHandler = useRef(() => {});
  const countingcompletedArray = useRef(() => {});

  useEffect(() => {
    filterHandler.current();
    // save to localhost
    savelocalhost(Todos);
    countingcompletedArray.current();
  }, [Todos, selelted]);

  // list controller :
  const DeleteHandler = id => {
    SetTodos(Todos.filter(elem => elem.id !== id));
  };

  const completeHandler = id => {
    SetTodos(
      Todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  // set counting in completed list
  countingcompletedArray.current = () => {
    setcountingcompleted(
      Todos.filter(Todos => Todos.completed === false).length
    );
  };
  // create filter
  filterHandler.current = () => {
    switch (selelted) {
      case "completed":
        setfilter(Todos.sort().filter(Todos => Todos.completed === true));

        break;
      case "uncompleted":
        setfilter(Todos.filter(Todos => Todos.completed === false));

        break;
      default:
        setfilter(Todos);
    }
  };

  // render
  return (
    <div className="Div__components">
      <div className="controll">
        <div className="header" style={{ paddingBottom: "40px" }}>
          <p className="header__div">Dina Todo List</p>
          <p className="counting__div">Uncompleted: {countingcompleted}</p>
          <p className="counting__div">All total task: {Todos.length}</p>
        </div>
        <Form
          Todos={Todos}
          SetTodos={SetTodos}
          setselected={setselected}
          textEdit={textEdit}
          setTextEdit={setTextEdit}
        />
        {filter.map((todo, index) => (
          <List
            key={index}
            deleteFunction={() => DeleteHandler(todo.id)}
            completeFunciton={() => completeHandler(todo.id)}
            editFunction={() => setTextEdit(todo)}
            filternew={filter}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
