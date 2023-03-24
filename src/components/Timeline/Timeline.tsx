import React from "react";
import { Wrapper } from "../../styles/Timeline";
import TimeCard from "./TimeCard";
import { Row, Col } from "antd";

function Timeline() {
  return (
    <Row justify={"center"}>
      <Col span={24}>
        <Row justify={"center"}>
          <Col span={22} md={18} lg={22} xl={20}>
            <h1 style={{display: 'flex', justifyContent: 'center', margin: '4vh 0 4vh 0'}}>Как мы работаем</h1>
            <Wrapper>
              <TimeCard
                number={1}
                header="Закажите декларацию 
        3-НДФЛ, получите БЕСПЛАТНУЮ консультацию специалиста"
                paragraph="Специалист проконсультирует по списку документов, 
        по возможностям законного уменьшения налога и поможет получить налоговый вычет 
        максимально выгодно для Вас. Сделайте закладку сайта и обращайтесь в удобное для Вас время! 
        Пишите на WhatsApp, Viber или звоните +79033660552 - это ускорит время заполнения Вашей декларации."
                line={true}
              />
            </Wrapper>
            <Wrapper>
              <TimeCard
                number={2}
                header="Пришлите документы"
                paragraph="Пришлите фотографии документов на WhatsApp, Viber или на электронную почту 
        nalog.2@mail.ru наш специалист проверит Ваши документы, проконсультирует и заполнит Вашу декларацию 3-НДФЛ."
                line={true}
              />
            </Wrapper>
            <Wrapper>
              <TimeCard
                number={3}
                header="Получите декларацию 3-НДФЛ на почту"
                paragraph="Специалист заполненную декларацию 3-НДФЛ пришлет Вам на электронную почту в удобном для Вас формате!"
                line={true}
              />
            </Wrapper>
            <Wrapper>
              <TimeCard
                number={4}
                header="Оплатите услугу, после получения декларации 
                3-НДФЛ на вашу почту"
                paragraph="Оплачиваете услугу только после получения декларации 3-НДФЛ на Вашу электронную почту."
                line={true}
              />
            </Wrapper>
            <Wrapper>
              <TimeCard
                number={5}
                header="Подайте декларацию 
                3-НДФЛ или доверьте это нам"
                paragraph="Подайте декларацию и все необходимые документы к ней в налоговую любым 
                удобным для Вас способом. Или доверьте это нам, выбрав тариф Всё включено - VIP"
                line={false}
              />
            </Wrapper>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Timeline;
