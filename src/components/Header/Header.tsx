import React, { useState } from "react";
import Image from "next/image";

import { Col, Row } from "antd";
import { PhoneFilled } from "@ant-design/icons";

import {
  Logo,
  Navbar,
  Phone,
  Text,
  MainSection,
  Wrapper,
  HeadWrapper,
  ButtonWrapper,
} from "../../styles/Header";

import HeaderForm from "@/forms/Header";
import ButtonWhatsWhite from "../Buttons/ButtonWhatsUpWhite";

import logo from "../../assets/Header/logo.svg";
import background from "../../assets/Header/background.jpg";

const Header = () => {
  return (
    <HeadWrapper>
      <Row justify="center">
        {/* <Image
            src={background}
            alt="background"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: "-1",
              objectFit: "cover",
              backgroundSize: "cover",
            }}
          /> */}

        <Col span={22} md={18} lg={22} xl={20}>
          <Navbar>
            <Logo>
              <Image src={logo} alt="Logo" width={`180`} />
            </Logo>
            <Phone style={{ color: "white" }}>
              <PhoneFilled />
              <a href="tel:+78000000000"><h2>+7 800 000 00 00</h2></a> 
            </Phone>
            <ButtonWrapper>
              <ButtonWhatsWhite />
            </ButtonWrapper>
          </Navbar>

          <Wrapper>
            <MainSection>
              <Text>
                <h1>
                  Заполним декларацию <br /> 3-НДФЛ
                </h1>
                <h2>Бесплатная консультация специалиста</h2>
                <h2>Оплата после выполнения</h2>
                <h2>Сопровождение до завершения проверки <br/> декларации</h2>
              </Text>

                <HeaderForm
                  header="Заполните заявку и мы свяжемся с Вами в ближайшее время!"
                  button={false}
                />
            </MainSection>
          </Wrapper>
        </Col>
      </Row>
    </HeadWrapper>
  );
};

export default Header;
