import React from "react";

import { Img, SelectBox, Text } from "components";
import { Link } from "react-router-dom";

type CartNavbarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CartNavbar: React.FC<CartNavbarProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row ">
            <Link to="/">
              <Img
                className="h-[30px] w-[90px]"
                src="images/img_car.svg"
                alt="car"
              />
            </Link>

            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-row gap-9 sm:hidden items-center justify-between w-[498px] sm:w-full">
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              <Link to="/">Home</Link>
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              <Link to={"/products"}>Shop</Link>
            </Text>

            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              <Link to="/aboutus">About</Link>
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              <Link to="/contactus">Contact</Link>
            </Text>
          </div>
          <div></div>
        </div>
      </header>
    </>
  );
};

CartNavbar.defaultProps = {};

export default CartNavbar;
