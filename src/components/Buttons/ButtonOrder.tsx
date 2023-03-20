import React from 'react';
import { ButtonOrders } from '@/src/styles/Buttons';

interface Props {
  text: string;
}

function ButtonOrder(props: Props) {
  return (
    <ButtonOrders>
      <p>{props.text}</p>
    </ButtonOrders>
  )
}

export default ButtonOrder