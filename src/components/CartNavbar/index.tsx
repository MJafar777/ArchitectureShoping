import React from "react";

import { Img, SelectBox, Text } from "components";
import { Link, NavLink } from "react-router-dom";

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
          <div className="header-row md:flex md:items-center md:justify-between md:w-full">
            <Link to="/">
              <Img src="images/logo.png" alt="logo" width={150} height={150} />
            </Link>

            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-row gap-9 sm:hidden items-center justify-between w-[498px] sm:w-full">
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto  hover:text-blue-700"
              size="txtRubikRomanRegular18"
            >
              <NavLink to="/">Главная </NavLink>
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto hover:text-blue-700"
              size="txtRubikRomanRegular18"
            >
              <NavLink to={"/products"}>Продукты</NavLink>
            </Text>

            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto hover:text-blue-700"
              size="txtRubikRomanRegular18"
            >
              <NavLink to="/aboutus">О нас</NavLink>
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto hover:text-blue-700"
              size="txtRubikRomanRegular18"
            >
              <Link to="/contactus">Контакты</Link>
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
