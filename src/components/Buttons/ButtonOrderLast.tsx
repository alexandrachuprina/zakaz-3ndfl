import React from "react";
import { ButtonOrdersLast } from "@/src/styles/Buttons";

interface Props {
  text: string;
}

function ButtonOrderLast(props: Props) {
  return (
    <ButtonOrdersLast>
      <p>{props.text}</p>
    </ButtonOrdersLast>
  );
}

export default ButtonOrderLast;
