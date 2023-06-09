import React, { useState, useEffect } from "react";
import axios from "axios";
import MainCard from "./MainCard";
import MainCardLast from "./MainCardLast";

import { Col, Row } from "antd";
import { MainWrapper } from "../../styles/Main";

function Main() {
  const [myData, setMyData] = useState<any>([]);
  const [lastCard, setLastCard] = useState<any>([]);

  useEffect(() => {
    axios
      .get<any>("http://localhost:1337/api/block2s?populate=*")
      .then((response) => {
        const info = response.data.data;
        setMyData(info);
      });
    axios
      .get<any>("http://localhost:1337/api/block2-1s?populate=*")
      .then((response) => {
        const info = response.data.data;
        setLastCard(info);
      });
  }, []);

  return (
    <Row justify={"center"} wrap={true} style={{ marginBottom: "100px" }}>
      <Col span={22} md={20} lg={18} xl={17}>
        {myData ? (
          <>
            <MainWrapper>
              {myData.map((item: any, i: number) => (
                <MainCard
                  key={i}
                  header={myData[i].attributes.header}
                  paragraph={myData[i].attributes.description}
                  //@ts-ignore
                  src={`http://localhost:1337${myData[i].attributes.pic.data[0].attributes.url}`}
                  buttonText={myData[i].attributes.buttontext}
                  price={true}
                />
              ))}
            </MainWrapper>
            {lastCard ? (
              <>
                {lastCard.map((item: any, i: number) => (
                  <MainCardLast
                    key={i}
                    header={lastCard[i].attributes.Header}
                    paragraph={lastCard[i].attributes.Description}
                    //@ts-ignore
                    src={`http://localhost:1337${lastCard[i].attributes.pic.data.attributes.url}`}
                    buttonText={lastCard[i].attributes.buttontext}
                    price={true}
                  />
                ))}
              </>
            ) : null}
          </>
        ) : null}
      </Col>
    </Row>
  );
}

export default Main;
