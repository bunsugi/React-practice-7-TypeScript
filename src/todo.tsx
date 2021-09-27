import { VFC } from "react";
import { TodoType } from "./types/todo";

// type TodoType = {
//     title : string;
//     userId : number;
//     completed?: boolean;
// }

// export const Todo = (props: Pick<TodoType,"title"| "userId" | "completed">) => {
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完了] " : "[未完了] ";
  return <p>{`${completeMark}${title}（ユーザー：${userId}）`}</p>;
};
