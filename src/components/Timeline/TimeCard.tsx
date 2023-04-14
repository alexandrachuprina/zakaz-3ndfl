import React from "react";
import {
  Wrapper,
  Circle,
  Line,
  Text,
  Symbols,
  NoLine,
} from "@/src/styles/Timeline";

interface Props {
  number: number;
  header: string;
  paragraph: string;
  line: boolean;
}

function TimeCard(props: Props) {
  return (
    <Wrapper>
      <Symbols>
        <Circle>
          <p>{props.number}</p>
        </Circle>
        {props.line ? <Line /> : <NoLine />}
      </Symbols>
      <Text>
        <h2>{props.header}</h2>
        <p>{props.paragraph}</p>
      </Text>
    </Wrapper>
  );
}

export default TimeCard;
