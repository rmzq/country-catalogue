import { FunctionComponent } from "react";

type CardProps = {
  name: string;
};
const Card: FunctionComponent<CardProps> = ({ name }) => {
  //   const { name } = CardProps;
  return <div className="bg-white p-2 rounded-md">{name}</div>;
};

export default Card;
