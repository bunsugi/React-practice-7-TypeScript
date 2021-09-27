import { FC, VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};


// FC　関数型コンポーネント。暗黙的に、proprsにchildrenを含む。
// VFC 関数型コンポーネント。childrenを含まない。FCにchildrenを含まなくなるまでの暫定。
export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
