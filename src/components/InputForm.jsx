import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleAddTodo = () => {
    if (newTodo !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditStart = (id) => {
    setEditingTodoId(id);
  };

  const handleEditChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleEditSubmit = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newTodo } : todo
    );
    setTodos(updatedTodos);
    setEditingTodoId(null);
    setNewTodo("");
  };

  return (
    <div>
      <ul className="my-10 ">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-blue-400 my-2 w-3/5 mx-auto flex justify-between"
          >
            <div>
              {editingTodoId === todo.id ? (
                <input
                  type="text"
                  className="mt-1 mx-3 px-2"
                  value={newTodo}
                  onChange={handleEditChange}
                />
              ) : (
                <span className="px-3 py-2">{todo.text}</span>
              )}
            </div>
            <div>
              {editingTodoId === todo.id ? (
                <button
                  onClick={() => handleEditSubmit(todo.id)}
                  className="ml-2 bg-transparent py-1 px-2 rounded-md text-white"
                >
                  <i class="fa-solid fa-check"></i>
                </button>
              ) : (
                <button
                  onClick={() => handleEditStart(todo.id)}
                  className="ml-2 bg-transparent py-1 px-2 rounded-md text-white"
                >
                  <i class="fa-solid fa-pen`-to-square"></i>
                </button>
              )}
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="ml-2 bg-transparent py-1 px-2 rounded-md text-white"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();
        }}
        className="mt-16 mx-auto border rounded-sm w-1/2 border-blue-500 flex justify-between"
      >
        <input
          type="text"
          placeholder="Add something to your list"
          className="py-3 px-2 bg-transparent rounded-s-md outline-none text-white"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" className="py-3 px-3 bg-blue-500 text-white">
          ADD
        </button>
      </form>

      <button
        onClick={() => setTodos([])}
        className="my-4 border-2 border-gray-400 text-white py-2 px-4"
      >
        Delete all
      </button>
    </div>
  );
};

export default TodoList;
