import React from "react";
import Image from "next/image";
import MainCard from "./MainCard";

import { Col, Row } from "antd";

import { MainWrapper } from "../../styles/Main";
import pic01 from "../../assets/Main/pic01.png";
import pic02 from "../../assets/Main/pic02.png";
import pic03 from "../../assets/Main/pic03.png";
import pic04 from "../../assets/Main/pic04.svg";

function Main() {
  return (
    <Row justify={"center"}>
      <Col span={24}>
        <Row justify={"center"}>
          <Col span={22}>
            <MainWrapper>
              <MainCard
                header="КУПИЛИ НЕДВИЖИМОСТЬ?"
                paragraph1="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
                paragraph2="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, 
                а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
                //@ts-ignore
                src={pic01}
                buttonText='ЗАКАЗАТЬ'
              />
              <MainCard
                header="ОПЛАТИЛИ ОБУЧЕНИЕ?"
                paragraph1="Вы заплатили за свое обучение, за своих детей, или братьев, сестер?"
                paragraph2="Вы имеете право получить 13% от сумм, затраченных Вами на обучение."
                //@ts-ignore
                src={pic02}
                buttonText='ЗАКАЗАТЬ'
              />
              <MainCard
                header="КУПИЛИ НЕДВИЖИМОСТЬ?"
                paragraph1="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
                paragraph2="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, 
                а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
                //@ts-ignore
                src={pic03}
                buttonText='ЗАКАЗАТЬ'
              />
              <MainCard
                header="Бесплатная регистрация ИП и ООО"
                paragraph1="Подготовим все нужные документы"
                paragraph2="Поможем выбрать систему налогооблажения и виды деятельности. 
                Вы не платите госпошлину 800 ₽
                Вам не нужно ходить в налогоовую"
                //@ts-ignore
                src={pic04}
                buttonText='ОСТАВИТЬ ЗАЯВКУ'
              />
            </MainWrapper>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Main;
