import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Collapse } from "antd";
import { Wrapper, Section } from "../../styles/DocsList";

const { Panel } = Collapse;

function DocsList() {
  const [myData, setMyData] = useState<any>([]);
  const [cardsData, setCardsData] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/block4").then((response: any) => {
      const info = response.data.data.attributes;
      setMyData(info);
    });

    axios
      .get("http://localhost:1337/api/block4-lists")
      .then((response: any) => {
        const info = response.data.data;
        setCardsData(info);
      });
  }, []);

  return (
    <Section>
      <Row justify={"center"}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={22} md={18} lg={22} xl={17}>
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

                {cardsData ? (
                  <Collapse expandIconPosition={"end"}>
                    {cardsData.map((elem: any, i: number) => (
                      <Panel key={i} header={elem.attributes.title}>
                        <p>{elem.attributes.innerText}</p>
                      </Panel>
                    ))}
                  </Collapse>
                ) : null}
              </Wrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
}

export default DocsList;
