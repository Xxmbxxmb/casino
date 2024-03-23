import React from "react";
import GameCard from "./GameCard";

interface Props {
  data: {
    imagen: any;
    label: string;
    route: string;
  }[];
}

const CardContainer = ({ data }: Props) => {
  return (
    <div className="flex">
      {data &&
        data.map((card, index) => {
          return (
            <GameCard
              label={card.label}
              imagen={card.imagen}
              route={card.route}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default CardContainer;
