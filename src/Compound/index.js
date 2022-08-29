import React from "react";
import { Item } from "./item";

export const Bulleting = ({ children }) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child);
      })}
    </div>
  );
};

Bulleting.Item = Item;
