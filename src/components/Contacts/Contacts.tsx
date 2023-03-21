import React from "react";
import { Row, Col } from "antd";
import {
  Text,
  Header,
  Subheader,
  Social,
  SocialWrapper,
} from "../../styles/Contacts";
import { InstagramFilled, TwitterCircleFilled } from "@ant-design/icons";

function Contacts() {
  return (
    <Row justify={"center"}>
      <Col span={24}>
        <Row justify={"center"}>
          <Col span={22}>
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
                  <p>+7 (903) 366-05-52</p>
                </li>
                <li>
                  <p>+7 (903) 366-05-52</p>
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
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Contacts;
