import { FC } from "react";

type Todo = {
  title: string;
  id: number;
  completed: boolean;
  userId: number;
};

type TodoItemProps = { 
  item: Todo; 
};

const TodoItem: FC<TodoItemProps> = ({ item }) => {
  return (
    <li
      id={`todo_item_${item.id}`}
    >
      {item.title}
    </li>
  );
};

export default TodoItem;
