import React from "react";
import { Row, Col } from "antd";
import HeaderForm from "@/forms/Header";
import Image from "next/image";
import { ImageWrapper } from "@/src/styles/OrderForm";
import icon from "../../assets/OrderForm/icon.svg";

function OrderForm() {
  return (
    <Row justify={"center"}>
      <Col span={24}>
        <Row >
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
            <HeaderForm header="Закажите бесплатную консультацию" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default OrderForm;
