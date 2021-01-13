import React from "react";
import "../Style/Style.css";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";

function List({ completeFunciton, deleteFunction, editFunction, todo }) {
  return (
    <>
      <div className="ContainerList">
        <p className={todo.completed ? "p__list p__completed" : "p__list"}>
          {todo.text}
        </p>
        <button className="btn btnComplete complete" onClick={completeFunciton}>
          <i className="addbtn">
            <MdIcons.MdDone />
          </i>
        </button>
        <button className="btn btnTrash" onClick={deleteFunction}>
          <i className="addbtn">
            <BsIcons.BsTrash />
          </i>
        </button>
        <button className="btn btnEdit" onClick={editFunction}>
          <i className="addbtn">
            <AiIcons.AiOutlineEdit />
          </i>
        </button>
      </div>
    </>
  );
}
export default List;
