import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Collapse } from "antd";
import DocCard from "./DocCard";
import { Header, Wrapper, Section } from "../../styles/DocsList";
import Image from "next/image";
import icon from "../../assets/DocsList/icon.svg";

const { Panel } = Collapse;

function DocsList() {
  const [myData, setMyData] = useState<any>([]);
  const [cardsData, setCardsData] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/block3").then((response: any) => {
      // console.log("response:")
      // console.log(response)

      const info = response.data.data.attributes;
      // console.log('info:')
      // console.log(info)

      setMyData(info);
    });

    axios
      .get("http://localhost:1337/api/block3-lists")
      .then((response: any) => {
        // console.log("response:")
        // console.log(response)

        const info = response.data.data;

        // console.log("info:");
        // console.log(info);

        setCardsData(info);

        // console.log(info[1].attributes);
      });
  }, []);

  console.log(cardsData);

  return (
    <Section>
      <Row justify={"center"}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={22} md={18} lg={22} xl={20}>
              <Wrapper>
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "4vh 0 4vh 0",
                  }}
                >
                  {myData.header}
                </h1>

                {/* {cardsData.map(( i: number) => (
                  <p key={i}>{cardsData[i].attributes.header}</p>
                ))}

                <Collapse expandIconPosition={"end"}>
                  {cardsData.map((i: number) => (
                    <Panel key={i} header={cardsData[i].attributes.header}>
                      <p>{cardsData[i].attributes.description}</p>
                    </Panel>
                  ))}
                </Collapse> */}

              </Wrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
}

export default DocsList;
