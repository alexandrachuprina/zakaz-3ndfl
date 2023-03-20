import React from "react";

import { Button, Form, Input, Select } from "antd";
import { InputHeader, Card } from "../styles/HeaderForm";

const { Option } = Select;

function HeaderForm() {
  return (
    <>
      <Card>
        <p>Заполните заявку и мы свяжемся с Вами в ближайшее время!</p>
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

          <p>Телефон для связи</p>

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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%"}}
            >
              <p>ЗАКАЗАТЬ</p>
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </>
  );
}

export default HeaderForm;
