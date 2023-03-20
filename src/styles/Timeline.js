import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const Symbols = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 2vw;
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vh 0 2vh 0;
  h2 {
    padding-bottom: 2vh;
  }
`
export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  background-color: black;
  p {
    color: white;
  }
`
export const Line = styled.div`
  height: 100%;
  width: 2px;
  background-color: black;
`
export const NoLine = styled.div``