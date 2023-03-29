import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

import { Col, Row } from "antd";
import { PhoneFilled } from "@ant-design/icons";

import {
  Logo,
  Navbar,
  Phone,
  Text,
  MainSection,
  HeadWrapper,
  ButtonWrapper,
} from "../../styles/Header";

import HeaderForm from "@/src/components/HeaderForm";
import ButtonWhatsWhite from "../Buttons/ButtonWhatsUpWhite";

import logo from "../../assets/Header/logo.svg";
import background from "../../assets/Header/background.jpg";

const Header = () => {
  const [myData, setMyData] = useState<any>([]);

  axios.get<any>("http://localhost:1337/api/block1")
  .then((response) => {
    const info = response.data.data.attributes;
    // console.log(info)
    setMyData(info);
  })
  

  return (
    <HeadWrapper>
      <Row justify="center">
        <Col span={22} md={18} lg={22} xl={20}>
          <Navbar>
            <Logo>
              <Image src={logo} alt="Logo" width={`180`} />
            </Logo>
            <Phone style={{ color: "white" }}>
              <PhoneFilled />
              <a href={`tel:${myData.Tel}`}>
                <h2>{myData.Tel}</h2>
              </a>
            </Phone>
            <ButtonWrapper>
              <ButtonWhatsWhite />
            </ButtonWrapper>
          </Navbar>

          <MainSection>
            <Text>
              <h1>{myData.Header}</h1>
              <h2>Бесплатная консультация специалиста</h2>
              <h2>Оплата после выполнения</h2>
              <h2>
                Сопровождение до завершения проверки <br /> декларации
              </h2>
            </Text>

            <HeaderForm
              header={myData.FormHeader}
              button={false}
            />
          </MainSection>
        </Col>
      </Row>
    </HeadWrapper>
  );
};

export default Header;
