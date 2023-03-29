import React from "react";
import { Collapse } from "antd";
import Paragraph from "antd/lib/skeleton/Paragraph";

const { Panel } = Collapse;

interface Props {
  header1: string;
  paragraph1: string;
  header2: string;
  paragraph2: string;
  header3: string;
  paragraph3: string;
  header4: string;
  paragraph4: string;
  header5: string;
  paragraph5: string;
  header6: string;
  paragraph6: string;
  header7: string;
  paragraph7: string;
}

function DocCard(props: Props) {
  return (
    <>
      <Collapse expandIconPosition={"end"}>
        <Panel header={props.header1} key="1">
          <p>{props.paragraph1}</p>
        </Panel>
        <Panel header={props.header2} key="2">
          <p>{props.paragraph2}</p>
        </Panel>
        <Panel header={props.header3} key="3">
          <p>{props.paragraph3}</p>
        </Panel>
        <Panel header={props.header4} key="4">
          <p>{props.paragraph4}</p>
        </Panel>
        <Panel header={props.header5} key="5">
          <p>{props.paragraph5}</p>
        </Panel>
        <Panel header={props.header6} key="6">
          <p>{props.paragraph6}</p>
        </Panel>
        <Panel header={props.header7} key="7">
          <p>{props.paragraph7}</p>
        </Panel>
      </Collapse>
    </>
  );
}

export default DocCard;
