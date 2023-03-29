import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import MainCard from "./MainCard";
import MainCardLast from "./MainCardLast";

import { Col, Row } from "antd";

import { MainWrapper } from "../../styles/Main";
import pic01 from "../../assets/Main/pic01.svg";
import pic02 from "../../assets/Main/pic02.svg";
import pic03 from "../../assets/Main/pic03.svg";
import pic05 from "../../assets/Main/pic05.svg";
import pic06 from "../../assets/Main/pic06.svg";
import pic07 from "../../assets/Main/pic07.svg";

function Main() {
  const [myData, setMyData] = useState<any>([]);
  const [lastCard, setLastCard] = useState<any>([]);

  axios.get<any>("http://localhost:1337/api/block2s").then((response) => {
    const info = response.data.data;
    // console.log(info[0].attributes)
    setMyData(info);
  });
  axios.get<any>("http://localhost:1337/api/block2-1s").then((response) => {
    const info = response.data.data;
    // console.log(info[0].attributes)
    setLastCard(info);
  });

  return (
    <Row justify={"center"} wrap={true}>
      <Col span={22} md={20} lg={18} xl={20}>
        {myData ? (
          <>
            <MainWrapper>
              {myData.map((item: any, i: number) => (
                <MainCard
                  key={i}
                  header={myData[i].attributes.header}
                  paragraph={myData[i].attributes.description}
                  //@ts-ignore
                  src={pic01}
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
                    src={pic01}
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
