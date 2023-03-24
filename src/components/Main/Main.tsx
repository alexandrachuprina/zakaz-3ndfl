import React from "react";
import Image from "next/image";
import MainCard from "./MainCard";
import MainCardLast from "./MainCardLast";

import { Col, Row } from "antd";

import { MainWrapper } from "../../styles/Main";
import pic01 from "../../assets/Main/pic01.svg";
import pic02 from "../../assets/Main/pic02.svg";
import pic03 from "../../assets/Main/pic03.svg";
import pic04 from "../../assets/Main/pic04.svg";
import pic05 from "../../assets/Main/pic05.svg";
import pic06 from "../../assets/Main/pic06.svg";
import pic07 from "../../assets/Main/pic07.svg";

function Main() {
  return (
    <Row justify={"center"}>
      <Col span={22} md={18} lg={16} xl={20}>
        <MainWrapper>
          <MainCard
            header="КУПИЛИ НЕДВИЖИМОСТЬ?"
            paragraph1="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
            paragraph2="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, 
                а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
            //@ts-ignore
            src={pic01}
            buttonText="ЗАКАЗАТЬ"
            price={true}
          />
          <MainCard
            header="ОПЛАТИЛИ ОБУЧЕНИЕ?"
            paragraph1="Вы заплатили за свое обучение, за своих детей, или братьев, сестер?"
            paragraph2="Вы имеете право получить 13% от сумм, затраченных Вами на обучение."
            //@ts-ignore
            src={pic02}
            buttonText="ЗАКАЗАТЬ"
            price={true}
          />
          <MainCard
            header="ОПЛАТИЛИ ЛЕЧЕНИЕ?"
            paragraph1="Вы приобрели недвижимость (квартира, дом, комната, земельный участок с домом)?"
            paragraph2="Вы можете вернуть до 260 000 рублей с суммы, уплаченной за вашу квартиру или дом, 
                а также можете вернуть до 390 000 рублей с уплаченных процентов по ипотеке."
            //@ts-ignore
            src={pic03}
            buttonText="ЗАКАЗАТЬ"
            price={true}
          />
          <MainCard
            header="ДОПОЛНИТЕЛЬНЫЙ ДОХОД"
            paragraph1="Подготовим все нужные документы"
            paragraph2="Поможем выбрать систему налогооблажения и виды деятельности. 
                Вы не платите госпошлину 800 ₽
                Вам не нужно ходить в налогоовую"
            //@ts-ignore
            src={pic04}
            buttonText="ОСТАВИТЬ ЗАЯВКУ"
            price={true}
          />
          <MainCard
            header="СТРАХОВАНИЕ"
            paragraph1="Подготовим все нужные документы"
            paragraph2="Поможем выбрать систему налогооблажения и виды деятельности. 
                Вы не платите госпошлину 800 ₽
                Вам не нужно ходить в налогоовую"
            //@ts-ignore
            src={pic05}
            buttonText="ОСТАВИТЬ ЗАЯВКУ"
            price={true}
          />
          <MainCard
            header="ИНВЕСТИЦИИ"
            paragraph1="Подготовим все нужные документы"
            paragraph2="Поможем выбрать систему налогооблажения и виды деятельности. 
                Вы не платите госпошлину 800 ₽
                Вам не нужно ходить в налогоовую"
            //@ts-ignore
            src={pic06}
            buttonText="ОСТАВИТЬ ЗАЯВКУ"
            price={true}
          />
        </MainWrapper>
        <MainCardLast
          header="БЕСПЛАТНАЯ РЕГИСТРАЦИЯ ИП И ООО"
          paragraph1="Подготовим все нужные документы"
          paragraph2="Поможем выбрать систему налогооблажения и виды деятельности. 
                Вы не платите госпошлину 800 ₽
                Вам не нужно ходить в налогоовую"
          //@ts-ignore
          src={pic07}
          buttonText="ОСТАВИТЬ ЗАЯВКУ"
          price={false}
        />
      </Col>
    </Row>
  );
}

export default Main;
