"use client";
import React from "react";
import { Card } from "./card";
import styled from "@emotion/styled";

export default function Swipe() {
  const [items, setItems] = React.useState([2, 1]);

  const vote = () => {
    setItems([items[0] + 1, items[0]]);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {items.map((item, index) => (
        <Card key={index} onVote={vote} drag={index === 1}>
          {item}
        </Card>
      ))}
    </div>
  );
}
