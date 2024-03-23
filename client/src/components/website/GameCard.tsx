import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  imagen: any;
  label: string;
  route: string;
}

const GameCard = ({ imagen, label, route }: Props) => {
  const navigation = useNavigate();

  return (
    <div className="flex flex-col" onClick={() => navigation(`${route}`)}>
      <img src={imagen} alt="" className="rounded-2xl w-52" />
      <h1 className="font-semibold">{label}</h1>
    </div>
  );
};

export default GameCard;
