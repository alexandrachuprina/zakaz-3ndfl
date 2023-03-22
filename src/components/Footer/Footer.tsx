import React from "react";
import { Row, Col } from "antd";
import { Section, Logo, Line, Credits, Services } from "@/src/styles/Footer";
import Image from "next/image";
import logo from "../../assets/Header/logo.svg";

function Footer() {
  return (
    <Section>
      <Row justify={"center"}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={22} md={18}>
              <Logo>
                <Image src={logo} alt="Logo" width={`180`} />
              </Logo>
              <Services>
                <p>Заполним 3-ндфл недорого</p>
                <p>Закажите декларацию 3-НДФЛ онлайн</p>
              </Services>
              <Credits>
                <Line />
                <p>© 2022, Центр Отчетности </p>
              </Credits>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
}

export default Footer;
