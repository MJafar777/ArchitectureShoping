import React from "react";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

type HomepageCardproductProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "image"
  | "category"
  | "status"
  | "save"
  | "teakwoodchair"
  | "twentyfour"
  | "link"
> &
  Partial<{
    save: string;
    link: string;
    image: string;
    status: string;
    category: string;
    twentyfour: string;
    teakwoodchair: string;
  }>;

  

const HomepageCardproduct: React.FC<HomepageCardproductProps> = (props) => {
  
  return (
    <Link to={`/room/${props.link}`}>
      <div className={props.className}>
        <div className="h-[400px] relative w-full">
          <Img
            className="absolute h-[400px] inset-[0] justify-center m-auto object-cover w-full"
            alt="image"
            src={`${props.image}`}
          />
        </div>
      </div>
    </Link>
  );
};

HomepageCardproduct.defaultProps = {
  image: "images/products/7.png",
  category: "Rooms building",
  teakwoodchair: "house building",
  twentyfour: "$120.000",
};

export default HomepageCardproduct;


