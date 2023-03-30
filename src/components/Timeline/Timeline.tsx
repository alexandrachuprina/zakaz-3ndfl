import React, { useState, useEffect } from "react";
import axios from "axios";
import { Wrapper } from "../../styles/Timeline";
import TimeCard from "./TimeCard";
import { Row, Col } from "antd";
import { Titillium_Web } from "next/font/google";

function Timeline() {
  const [myHeader, setMyHeader] = useState<any>([]);
  const [cardsData, setCardsData] = useState<any>([]);

  useEffect(() => {
    axios.get<any>("http://localhost:1337/api/block3").then((response) => {
      const info = response.data.data;
      // console.log('info:')
      // console.log(info)
      setMyHeader(info);
    });
    axios
      .get<any>("http://localhost:1337/api/block3-lists")
      .then((response) => {
        const info = response.data.data;
        // console.log('info:')
        // console.log(info)
        setCardsData(info);
      });
  }, []);

  return (
    <Row justify={"center"} style={{ paddingBottom: "4vh" }}>
      <Col span={24}>
        <Row justify={"center"}>
          <Col span={22} md={18} lg={22} xl={20}>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "4vh 0 4vh 0",
              }}
            >
              {myHeader.header}
            </h1>

            {cardsData.map((elem: any, i: number) => (
              <Wrapper>
                <TimeCard
                  key={i}
                  number={i + 1}
                  header={elem.attributes.header}
                  paragraph={elem.attributes.description}
                  line={true}
                />
              </Wrapper>
            ))}

          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Timeline;
