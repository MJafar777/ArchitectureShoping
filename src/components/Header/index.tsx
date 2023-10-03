import React, { useState } from "react";

import { Img, SelectBox, Text } from "components";
import { Link } from "react-router-dom";

import { BurgerHeader } from "components/burgerHeader";

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
              <Img src="images/logo.png" width={70} height={70} alt="car" />
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
            {/* <SelectBox
              className="font-rubik leading-[normal] text-black-900 text-left text-lg tracking-[-0.50px] w-[17%] sm:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_black_900.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="frameFour"
              // options={homeOptionsList}
              isSearchable={false}
              placeholder="Home"
            /> */}
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
              <Link to="/products">Shop</Link>
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
              <Link to="/contactus">Contact </Link>
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
