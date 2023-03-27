import React from "react";
import { Row, Col } from "antd";
import {
  Text,
  Header,
  Subheader,
  Social,
  SocialWrapper,
  Section,
  Wrapper
} from "../../styles/Contacts";
import { InstagramFilled, TwitterCircleFilled } from "@ant-design/icons";
import MapSection from "../Map";

function Contacts() {
  return (
    <Row justify={"center"}>
      <Col span={24}>
        <Wrapper>
        <Row justify={"center"}>
          <Col span={22} md={18} lg={22} xl={20}>
            <Section>
              <Text>
                <Header>
                  <h1>Контактная информация</h1>
                </Header>
                <Subheader>
                  <p>Адрес</p>
                </Subheader>
                <ul>
                  <li>
                    <p>г. Москва, Новая Площадь, д. 6</p>
                  </li>
                  <li>
                    <p>г. Санкт-Петербург, ул. Гороховая, д. 46</p>
                  </li>
                  <li>
                    <p>г. Оренбург проспект Гагарина, д. 23В</p>
                  </li>
                </ul>
                <Subheader>
                  <p>Телефоны</p>
                </Subheader>
                <ul>
                  <li>
                    <a href="tel:+79033660552"><p>+7 (903) 366-05-52</p></a>
                  </li>
                  <li>
                    <a href="tel:+79033660552"><p>+7 (903) 366-05-52</p></a>
                  </li>
                </ul>
                <Subheader>
                  <p>Электронная почта</p>
                </Subheader>
                <ul>
                  <li>
                    <p>nalog.2@mail.ru</p>
                  </li>
                </ul>
                <Subheader>
                  <p>Мы в соц сетях</p>
                </Subheader>
                <SocialWrapper>
                  <Social>
                    <InstagramFilled />
                    <p>4501</p>
                  </Social>
                  <Social>
                    <TwitterCircleFilled />
                    <p>389</p>
                  </Social>
                </SocialWrapper>
              </Text>
            </Section>
          </Col>
        </Row>
        <MapSection />
        </Wrapper>
      </Col>
    </Row>
  );
}

export default Contacts;
