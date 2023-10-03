import React from "react";

import { Button, Img, PagerIndicator, Slider, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";
import TeamCardteam from "components/TeamCardteam";
import HomepageCardproduct from "components/HomepageCardproduct";

const AboutusPage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
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
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[138px] items-center justify-between max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
              <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                  <Text
                    className="leading-[60.00px] max-w-[656px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[-0.50px]"
                    size="txtRalewayRomanBold48"
                  >
                    Разрабатывая проект 7 Residence
                  </Text>
                  <Text
                    className="leading-[35.00px] max-w-[626px] md:max-w-full text-base text-gray-500 tracking-[-0.50px]"
                    size="txtRubikRegular16"
                  >
                    Двор жилого комплекса - это защищенна территория, где всё
                    продуманно для комфортной жизни. Созданы условия для занятий
                    спортом, а ваши дети смогут игра безопасности, во дворе без
                    машин, благо) системе car-free zone. Машины, кроме пожарной
                    и медицинской, не имеют досту на территорию двора. Для
                    автомобилей жильцов создано специальная многоуровневая
                    парковочная зона.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start w-full"></div>
            </div>
            <Img
              className="h-[650px] sm:h-auto max-h-[650px] object-cover rounded-bl-[300px] rounded-tl-[300px] rounded-tr-[300px] sm:w-[] md:w-[]"
              src="images/img_rectangle1492.png"
              alt="rectangle1492"
            />
          </div>
        </div>
        <div className="bg-black-900 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[173px] py-[11px] w-full"></div>

        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[53px] items-center justify-start max-w-[1290px] mx-auto w-full">
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
            <PagerIndicator
              className="flex gap-[15px] h-[15px] items-start justify-start w-[75px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray-900 w-[15px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
        </div>
        <div className="h-[535px] md:h-[892px] md:px-5 relative w-full">
          <div className="absolute bg-yellow-100 bottom-[0] h-[440px] inset-x-[0] mx-auto w-full"></div>
          <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-y-[0] items-center justify-between max-w-[1365px] my-auto right-[0] w-full">
            <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start w-[525px] sm:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl tracking-[-0.50px] w-full ml-10"
                  size="txtRubikRegular24"
                >
                  Интерьер Модерн
                </Text>
                <Text
                  className="leading-[60.00px] max-w-[525px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px] ml-10"
                  size="txtRalewayRomanBold40"
                >
                  Обустройте свой дом таким образом с наших современных
                </Text>
              </div>
            </div>
            <Img
              className="sm:flex-1 h-[535px] md:h-auto object-cover w-[535px] sm:w-full"
              src="images/img_insideweather.png"
              alt="insideweather"
            />
          </div>
        </div>

        <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1290px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
        </div>
        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default AboutusPage;
