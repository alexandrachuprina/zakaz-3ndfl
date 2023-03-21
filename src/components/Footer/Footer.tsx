import React from "react";
import { Row, Col } from "antd";
import { Section, Logo } from "@/src/styles/Footer";
import Image from 'next/image';
import logo from '../../assets/Header/logo.svg';

function Footer() {
  return (
    <Section>
      <Row justify={"center"}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={22}></Col>
            <Logo>
              <Image src={logo} alt="Logo" width={`180`} />
            </Logo>
          </Row>
        </Col>
      </Row>
    </Section>
  );
}

export default Footer;
