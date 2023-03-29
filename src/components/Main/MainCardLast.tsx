import React from "react";
import Image from "next/image";
import {
  Header,
  CardWrapper,
  ImageWrapper,
  TextWrapper,
  ButtonsWrapper,
  Price,
} from "../../styles/MainCardLast";
import ButtonOrderLast from "../Buttons/ButtonOrderLast";

interface Props {
  header: string;
  paragraph1: string;
  paragraph2: string;
  src: string;
  buttonText: string;
  price: boolean;
}

function MainCardLast(props: Props) {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image
          src={props.src}
          alt={props.header}
          style={{
            width: "auto",
            height: "100%",
          }}
        />
      </ImageWrapper>
      <TextWrapper>
        <Header>
          <h2>{props.header}</h2>
        </Header>
        <p>{props.paragraph1}</p>
        <br />
        <p>{props.paragraph2}</p>
        {props.price ? (
          <Price>
            <p>300 ₽</p>
          </Price>
        ) : null}
        <ButtonsWrapper>
          <ButtonOrderLast text={props.buttonText} />
        </ButtonsWrapper>
      </TextWrapper>
    </CardWrapper>
  );
}

export default MainCardLast;
