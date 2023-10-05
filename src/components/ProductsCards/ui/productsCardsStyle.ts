import styled from "styled-components";

interface PropsImage {
  src: string;
  alt?: string;
}

export const ProductsCardsWrapper = styled.div`
  width: 100%;
`;

export const Cards = styled.div`
  background: rgb(0, 48, 38);
  background: linear-gradient(
    90deg,
    rgba(0, 48, 38, 1) 15%,
    rgba(255, 255, 255, 1) 15%
  );

  width: 100%;
  height: 100%;
  max-height: 500px;

  padding: 20px;
  margin: 20px auto;
`;

export const CardsChild = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 20px auto;
`;

export const Informations = styled.div`
  width: 45%;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.6041010154061625) 100%,
    rgba(0, 0, 0, 0.6) 100%
  );

  color: #fff;
  padding: 20px;

  border-radius: 6px;
  border: 1px solid grey;
  ul {
    margin: 0 auto;
  }
`;

export const ImgCard = styled.div`
  width: 45%;
`;

export const Img = styled.img<PropsImage>`
  max-height: 300px;
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 1rem;
  color: #c99e66;

  text-align: center;
`;

export const Btn = styled.button`
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
  background-color: rgb(0, 48, 38);
  padding: 10px 40px;
  border: solid 0px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 50px;
  transition: 402ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  text-transform: lowercase;
  margin: 0 auto;

  &:hover {
    transition: 402ms;
    padding: 10px 50px;
    transform: translateY(-1px);
    background-color: #fff;
    color: rgb(0, 48, 38);
    border: solid 0px rgb(0, 48, 38);
  }
`;
