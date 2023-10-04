import React, { useState } from "react";

import { Img, Text } from "components";
import { Link } from "react-router-dom";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  const [blockBurger, setBlockBurger] = useState(false);

  return (
    <>
      <header className={props.className}>
        <div className=" flex md:block flex-row items-center justify-between w-full">
          <div className="header-row ">
            <Link to="/">
              <Img
                src="images/headerIcons/logo.png"
                width={70}
                height={70}
                alt="car"
              />
            </Link>
            <div
              className="mobile-menu"
              onClick={() => {
                setBlockBurger(true);
              }}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="flex sm:flex-1 flex-row gap-9 md:hidden items-center justify-between w-[498px] sm:w-full">
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

      {blockBurger ? (
        <div
          style={{
            zIndex: "100",
            width: "100%",
            height: "100vh",
            position: "fixed",

            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "#FFF",
          }}
        >
          <div className="flex items-center justify-between w-[90%] mx-[auto] my-4">
            <Link to="/">
              <Img
                src="images/headerIcons/logo.png"
                width={70}
                height={70}
                alt="car"
              />
            </Link>
            <button
              onClick={() => {
                setBlockBurger(false);
              }}
            >
              <Img
                src="images/headerIcons/closeBtn.svg"
                width={25}
                height={25}
                alt="car"
              />
            </button>
          </div>

          <div className="flex sm:flex-1 flex-col gap-7 items-center justify-center w-[100%] h-[50%]">
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => {
                setBlockBurger(false);
              }}
            >
              <Link to="/">Home</Link>
            </Text>

            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => {
                setBlockBurger(false);
              }}
            >
              <Link to="/products">Shop</Link>
            </Text>

            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => {
                setBlockBurger(false);
              }}
            >
              <Link to="/aboutus">About</Link>
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
              onClick={() => {
                setBlockBurger(false);
              }}
            >
              <Link to="/contactus">Contact </Link>
            </Text>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

Header.defaultProps = {};

export default Header;
