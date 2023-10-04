import React from "react";
import Header from "components/Header";
import { Img, Text } from "components";
import CartSectionfooter from "components/CartSectionfooter";
import HomepageCardproduct from "components/HomepageCardproduct";
import CartColumnframe48095972 from "components/CartColumnframe48095972";

const ShopPage: React.FC = () => {
  const homepageCardproductPropList = [
    { save: "images/products/5.png", status: "New" },
    {
      image: "images/products/1.png",
      category: "4x Rooms",
      teakwoodchair: "house building",
      twentyfour: "$220.000",
    },
    {
      image: "images/products/2.png",
      category: "4x Rooms",
      teakwoodchair: "house building",
      twentyfour: "$330.000",
    },

    {
      image: "images/products/second/Frame 13.png",
    },
    {
      image: "images/products/second/Frame 14.png",
    },
    {
      image: "images/products/second/Frame 15.png",
    },
    {
      image: "images/products/3.png",
      category: "2x Rooms",
      teakwoodchair: "house building",
      twentyfour: "$260.000",
    },
    {
      image: "images/products/4.png",
      category: "6x Rooms",
      teakwoodchair: "house building",
      twentyfour: "$280.000",
    },
    {
      image: "images/products/5.png",
      category: "Rooms building",
      teakwoodchair: "house building",
      twentyfour: "$108.000",
    },
    {
      image: "images/products/second/Frame 16.png",
    },
    {
      image: "images/products/second/Frame 17.png",
    },
    {
      image: "images/products/second/Frame 18.png",
    },
    {
      image: "images/products/6.png",
      category: "Rooms building",
      teakwoodchair: "house building",
      twentyfour: "$162.000",
    },
    {
      image: "images/products/7.png",
      category: "Rooms building",
      teakwoodchair: "house building",
      twentyfour: "$120.000",
    },
    {
      image: "images/products/2.png",
      category: "Rooms building",
      teakwoodchair: "house building",
      twentyfour: "$189.000",
    },
  ];

  return (
    <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
      <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[10px] w-full" />

      <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
        <div className="flex flex-col items-start justify-start max-w-[1290px] mx-auto w-full">
          <div className="h-[450px] relative w-full">
            <Img
              className="h-[450px] m-auto object-cover w-full"
              src="images/products/bgImg.png"
              alt="rectangleTwentyEight"
            />
            <div className="absolute flex flex-col  h-max inset-y-[0] items-start justify-start  my-auto w-full bg-opacity-23 backdrop-blur-[6.3px] border-opacity-30 border-white rounded-[16px] shadow-lg">
              <Text
                className="leading-[60.00px] w-full  text-4xl  text-white-A700 tracking-[-0.50px] text-center "
                size="txtRalewayRomanBold36"
              >
                Our Products
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col font-raleway items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
        <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1290px] mx-auto w-full">
          <div className="flex flex-1 flex-col font-rubik gap-[50px] items-center justify-start w-full">
            {/* ////////// */}
            <div className="flex flex-col items-center justify-start w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {homepageCardproductPropList.map((props, index) => (
                  <React.Fragment key={`HomepageCardproduct${index}`}>
                    <HomepageCardproduct
                      className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
        <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1290px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
      </div>

      <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
    </div>
  );
};

export default ShopPage;
