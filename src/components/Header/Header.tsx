import React, { useState } from "react";
import Image from "next/image";

import { Col, Row } from "antd";
import { PhoneFilled, WhatsAppOutlined } from "@ant-design/icons";

import { Logo, Navbar, Phone, ButtonWhatsUp, Text } from "../../styles/Header";

import HeaderForm from "@/forms/Header";

import logo from "../../assets/Header/logo.svg";
import background from "../../assets/Header/background.jpg";

const Header = () => {
  return (
    <Row justify="center">
      <Col span={24}>
        <Image
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
        />

        <Row justify="center">
          <Col span={22}>
            <Navbar>
              <Logo>
                <Image src={logo} alt="Logo" width={`180`} />
              </Logo>
              <Phone style={{ color: "white" }}>
                <PhoneFilled />
                <h2>+7 800 000 00 00</h2>
              </Phone>
              <ButtonWhatsUp>
                <WhatsAppOutlined style={{ color: "white" }} />
                <p>Написать в Whats-up</p>
              </ButtonWhatsUp>
            </Navbar>

            <Text>
              <h1>
                Заполним декларацию <br/> 3-НДФЛ
              </h1>
              <h2>Бесплатная консультация специалиста</h2>
              <h2>Оплата после выполнения</h2>
              <h2>Сопровождение до завершения проверки декларации</h2>
            </Text>

            <HeaderForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
