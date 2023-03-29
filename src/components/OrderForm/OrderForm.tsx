import React from "react";
import { Row, Col } from "antd";
import HeaderForm from "@/src/components/HeaderForm";
import Image from "next/image";
import { ImageWrapper, Section, Wrapper } from "@/src/styles/OrderForm";
import icon from "../../assets/OrderForm/icon.svg";
import ButtonWhatsBlack from "../Buttons/ButtonWhatsUpBlack";

function OrderForm() {
  return (
    <Section>
      <Row justify={"center"}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={22} md={18} lg={22} xl={20}>
              <Wrapper>
                <ImageWrapper>
                  <Image
                    src={icon}
                    alt="icon"
                    style={{
                      width: "auto",
                      height: "100%",
                    }}
                  />
                </ImageWrapper>
                <HeaderForm
                  header="Закажите бесплатную консультацию"
                  button={true}
                  text="Напишите нам в WhatsApp"
                />
              </Wrapper>
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
}

export default OrderForm;
