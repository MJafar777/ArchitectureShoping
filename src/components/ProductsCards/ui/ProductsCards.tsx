import React, { FC } from "react";

import {
  Img,
  Btn,
  Cards,
  Title,
  ImgCard,
  CardsChild,
  Informations,
  ProductsCardsWrapper,
} from "./productsCardsStyle";
import { Link } from "react-router-dom";

interface Props {
  homepageCardproductPropList: {
    kvm?: string;
    link?: string;
    save?: string;
    image?: string;
    status?: string;
    category?: string;
    twentyfour?: string;
    teakwoodchair?: string;
  }[];
}
const ProductsCards: FC<Props> = (props) => {
  const { homepageCardproductPropList } = props;
  return (
    <ProductsCardsWrapper>
      <h2
        style={{
          fontSize: "36px",
          textAlign: "center",
          fontWeight: "500",
          color: "rgb(0, 65, 52)",
        }}
      >
        Квартиры
      </h2>
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
                    <span>{props.kvm} m²</span>
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
