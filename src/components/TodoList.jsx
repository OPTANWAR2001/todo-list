import React from "react";
import TextFile from "./InputForm";

const TodoList = () => {
  return (
    <div className="flex justify-center items-center h-full my-3 ">
      <div className="bg-blue-950 border-sky-500 border-8 py-10 px-8 text-center items-center w-3/5 rounded-md">
        <h1 className="text-white text-3xl font-bold ">
          <span className="border-b-2 pb-0.5">Grocery Shopping</span>
        </h1>
        <TextFile />
      </div>
    </div>
  );
};

export default TodoList;
