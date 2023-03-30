import React from "react";
import { Collapse } from "antd";
import Paragraph from "antd/lib/skeleton/Paragraph";

const { Panel } = Collapse;

interface Props {
  // header: string;
  // description: string;
  // header2: string;
  // paragraph2: string;
  // header3: string;
  // paragraph3: string;
  // header4: string;
  // paragraph4: string;
  // header5: string;
  // paragraph5: string;
  // header6: string;
  // paragraph6: string;
  // header7: string;
  // paragraph7: string;
}

function DocCard(props: Props) {
  return (
    <>
      <Collapse expandIconPosition={"end"}>
        {/* <Panel header={props.header} key="1">
          <p>{props.description}</p>
        </Panel> */}
      </Collapse>
    </>
  );
}

export default DocCard;
