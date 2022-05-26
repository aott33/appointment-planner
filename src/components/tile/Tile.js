import React from "react";

export const Tile = (props) => {
  const item = props.item;

  return (
    <div className="tile-container">
      {
        Object.values(item).map((value, index) => {
          if (index === 0) {
            return <p className="tile-title" key={index}>{value}</p>
          }

          else {
            return <p className="tile" key={index}>{value}</p>
          }
          
        })
      }
    </div>
  );
};
