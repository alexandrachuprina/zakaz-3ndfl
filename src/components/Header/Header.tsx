import React, { useState, useEffect } from "react";
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
  const [subheaders, setSubheaders] = useState<any>([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/block1?populate=*")
      .then((response: any) => {
        // console.log("response:")
        // console.log(response)

        const info = response.data.data.attributes;
        // console.log('info:')
        // console.log(info)

        setMyData(info);

        if (response.status === 200) {
          const text: any = info.subheaders;
          // console.log('text:')
          // console.log(text)

          if (text) {
            const subheaders: any = text.data;
            // console.log('subheaders:')
            // console.log(subheaders)

            setSubheaders(subheaders)
          }
        }
      })
  }, []);

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
              {subheaders.map((elem: any, i: any) => (
                <h2 key={i}>{subheaders[i].attributes.works}</h2>
              ))}
            </Text>

            <HeaderForm header={myData.FormHeader} button={false} />
          </MainSection>
        </Col>
      </Row>
    </HeadWrapper>
  );
};

export default Header;
