import React, { useState } from "react";

import { Img, SelectBox, Text } from "components";
import { Link, NavLink } from "react-router-dom";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  const [blockBurger, setBlockBurger] = useState(false);
  console.log(blockBurger);
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row ">
            <Link to="/">
              <Img src="images/logo.png" alt="car" width={150} height={150} />
            </Link>
            <div
              className="mobile-menu"
              onClick={() => {
                setBlockBurger(!blockBurger);
              }}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>

            {/* {blockBurger ? (
              
            ) : (
              "ssslslslslslslsllslslsllslslsslslslsls"
            )} */}
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
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
