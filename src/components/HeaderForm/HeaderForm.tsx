import React, { useEffect, useState } from "react";

import { Button, Form, Input, Select } from "antd";
import { InputHeader, CardWrapper, Card } from "../../styles/HeaderForm";
import ButtonWhatsBlack from "@/src/components/Buttons/ButtonWhatsUpBlack";
import axios from "axios";

const { Option } = Select;

interface Props {
  header: string;
  button: boolean;
  text?: string;
}

function HeaderForm(props: Props) {
  return (
    <CardWrapper>
      <Card>
        <InputHeader>
          <p>{props.header}</p>
        </InputHeader>
        <p>Телефон для связи</p>

        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            name="phone-num"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <p>На что у Вас 3-НДФЛ</p>

          <Select
            defaultValue="property"
            style={{
              width: "100%",
            }}
            className="selection-form"
          >
            <Option value="property">Имущественный вычет</Option>
            <Option value="standart">Стандартный вычет</Option>
            <Option value="social">Социальный вычет</Option>
            <Option value="investions">Инвестиционный вычет</Option>
            <Option value="professional">Профессиональный вычет</Option>
          </Select>

          <Form.Item style={{ paddingTop: "24px", marginBottom: 0 }}>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              <p>Заказать</p>
            </Button>
          </Form.Item>

          {props.button ? (
            <>
              <p>{props.text}</p>
              <ButtonWhatsBlack />
            </>
          ) : null}
        </Form>
      </Card>
    </CardWrapper>
  );
}

export default HeaderForm;
