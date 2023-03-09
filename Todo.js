import { useState } from "react";
import ListItem from "./ListItem";
export default function Todo() {
  const [todo, setTodo] = useState(" ");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const List = todoList;
    List.push(todo);
    setTodoList(List);
    console.log(todoList); 
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} type="text"></input>
        <button type="submit">Add</button>
      </form>

      {todoList.map((item) => (
        <ListItem key={item} name={item}></ListItem>
      ))}
    </div>
  );
}