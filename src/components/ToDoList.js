import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
  const items = [0, 1, 2, 3];

  return <div>{items.map(item => <ToDoItem key={item} />)}</div>;
};
