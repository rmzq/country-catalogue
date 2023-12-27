import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

type CardProps = {
  name: string;
  flag: string;
  ccn3: string;
};
const Card: FunctionComponent<CardProps> = ({ name, flag, ccn3 }) => {
  //   const { name } = CardProps;
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    e.preventDefault();
    // console.log("bisa");
    navigate(`/detail/${ccn3}`);
  };
  return (
    <div
      className="bg-white p-2 rounded-md hover:cursor-pointer"
      onClick={handleClick}
    >
      {name} {flag}
    </div>
  );
};

export default Card;
