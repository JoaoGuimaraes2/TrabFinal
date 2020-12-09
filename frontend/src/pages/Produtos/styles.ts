import styled from 'styled-components';
import { shade } from 'polished';



export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

 
  @media (max-width: 1344px) {
    background-size: 20%;
  }

  @media (max-width: 1221px) {
    background: none;
  }
`;

export const Content = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
`;

export const Title = styled.h1`
  font-size: 64px;
`;

export const Produto = styled.div`
  margin-top: 20px;

  width: 600px;
  height: 180px;

  border-radius: 20px;

  background-color: #F78181;

  div {
    margin-top: 20px;
    text-align: center;

    h1 {
      font-size: 25px;
    }

    button {
      padding: 5px;
      margin-left: 15px;
    }
  }
`;

export const Next = styled.div`
  margin-top: 70px;
  flex-direction: row;
  display: flex;
  height: 50px;
  width: 250px;
  justify-content: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    font-size: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    background: #f6f6f6;
    color: #a9a9a9;

    &:hover {
      background: ${shade(0.2, '#A9A9A9')};
    }

    & + a {
      margin-left: 15px;
    }
  }
`;
