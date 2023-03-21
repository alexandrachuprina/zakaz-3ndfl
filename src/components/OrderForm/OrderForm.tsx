import React from "react";
import { Row, Col } from "antd";
import HeaderForm from "@/forms/Header";
import Image from "next/image";
import { ImageWrapper, Section } from "@/src/styles/OrderForm";
import icon from "../../assets/OrderForm/icon.svg";
import ButtonWhatsBlack from "../Buttons/ButtonWhatsUpBlack";

function OrderForm() {
  return (
    <Section>
      <Row justify={"center"}>
        <Col span={24}>
          <Row justify={"center"}>
            <Col span={22}>
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
                text="Напите нам в WhatsApp"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Section>
  );
}

export default OrderForm;
