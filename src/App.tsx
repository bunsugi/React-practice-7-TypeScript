import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import { Practice1 } from "./practices/Practice1";
import { Practice2 } from "./practices/Practice2";
import { Practice3 } from "./practices/Practice3";
import { Practice4 } from "./practices/Practice4";
import { Text } from "./Text";
import { Todo } from "./todo";
import { TodoType } from "./types/todo";
import { User } from "./types/user";
import { UserProfile } from "./UserProfile";

const user: User = {
  name: "とみこ",
  // hobbies: ["映画","ゲーム"]
}

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  };
  return (
    <div className="App">
      <UserProfile user={user} />

      <Text color="red" fontSize="24px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
      <br />
      <br />
    </div>
  );
}

export default App;
