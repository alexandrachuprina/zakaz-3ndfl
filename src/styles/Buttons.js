import styled from "styled-components";
import { queries } from "../assets/queries";

const ButtonWhats = styled.div`
  padding: 10px 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    padding: 0 0 0 2vh;
    margin: 0;
  }

  @media (min-width: ${queries.sm}) {
    padding: 10px 36px;
  }
  @media (min-width: ${queries.lg}) {
    padding: 10px 36px;
  }
`;
export const ButtonWhatsW = styled(ButtonWhats)`
  border: 1px solid white;
`;
export const ButtonWhatsB = styled(ButtonWhats)`
  border: 1px solid black;
`;
export const ButtonOrders = styled.div`
  margin-bottom: 2vh;
  padding: 1vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  p {
    padding: 0 0 0 2vh;
    color: white;
    margin: 0;
  }
`;
export const ButtonOrdersLast = styled.div`
  padding: 1vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
  p {
    padding: 0 0 0 2vh;
    color: white;
    margin: 0;
  }
`;
