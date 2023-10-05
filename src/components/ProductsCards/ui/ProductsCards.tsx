import React, { FC } from "react";

import {
  ProductsCardsWrapper,
  Img,
  Btn,
  Cards,
  Title,
  ImgCard,
  CardsChild,
  Informations,
} from "./productsCardsStyle";
import { Link } from "react-router-dom";

interface Props {
  homepageCardproductPropList: {
    link?: string;
    save?: string;
    status?: string;
    image?: string;
    category?: string;
    teakwoodchair?: string;
    twentyfour?: string;
  }[];
}
const ProductsCards: FC<Props> = (props) => {
  const { homepageCardproductPropList } = props;
  return (
    <ProductsCardsWrapper>
      {homepageCardproductPropList.map((props) => {
        return (
          <Cards>
            <CardsChild>
              <Informations>
                <Title>{props.category}комнатная</Title>
                <ul>
                  <li>
                    <span>Общая площадь</span>
                    <span> ---------- </span>
                    <span>38.78 m²</span>
                  </li>
                  <li>
                    <span>Балкон</span>
                    <span> ---------- </span>
                    <span>4.50 m²</span>
                  </li>
                  <li>
                    <span>Гостиная + Кухня</span>
                    <span> ---------- </span>
                    <span>26.22 m²</span>
                  </li>
                  <li>
                    <span>Холл</span>
                    <span> ---------- </span>
                    <span>4.72 m²</span>
                  </li>
                  <li>
                    <span>Ванная</span>
                    <span> ---------- </span>
                    <span>4.61 m²</span>
                  </li>
                </ul>
              </Informations>
              <ImgCard>
                <Img
                  src={props.image ? props.image : ""}
                  alt="image not found"
                />
              </ImgCard>
            </CardsChild>
            <Link to={`/room/${props.link}`}>
              <Btn>Подробнее</Btn>
            </Link>
          </Cards>
        );
      })}
    </ProductsCardsWrapper>
  );
};

export default ProductsCards;
