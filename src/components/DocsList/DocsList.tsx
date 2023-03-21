import React from "react";
import { Row, Col, Collapse } from "antd";
import DocCard from "./DocCard";
import { Header, Wrapper, Section } from "../../styles/DocsList";
import Image from "next/image";
import icon from '../../assets/DocsList/icon.svg';

function DocsList() {
  return (
    <Section>
      <Image
        src={icon}
        alt="icon"
        style={{
          position: "absolute",
          width: "80%",
          height: "auto",
          zIndex: "0",
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      />

      <Row justify={"center"}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={22}>
              <Wrapper>
                <Header>
                  <p>Список необходимых документов</p>
                </Header>
                <DocCard
                  header1="Необходимые документы при имущественном вычете при покупке квартиры"
                  paragraph1="text"
                  header2="Необходимые документы при продаже квартиры/дома/дачи/автомобиля/гаража?"
                  paragraph2="text"
                  header3="Необходимые документы при сдаче имущества в аренду"
                  paragraph3="text"
                  header4="Необходимые документы на вычет за лечение"
                  paragraph4="text"
                  header5="Необходимые документы на вычет за обучение"
                  paragraph5="text"
                  header6="Необходимые документы на вычет за оплату страхования жизни"
                  paragraph6="text"
                  header7="Необходимые документы на вычет за инвестиционный счет"
                  paragraph7="text"
                />
              </Wrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
}

export default DocsList;
