import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "components/Header";

import CartSectionfooter from "components/CartSectionfooter";
import HomepageCardproduct from "components/HomepageCardproduct";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import { Button, Img, List, PagerIndicator, Slider, Text } from "components";

const HomepagePage: React.FC = () => {
  const navigate = useNavigate();

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
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[10px] w-full" />
          <div
            style={{
              backgroundImage: `url(${"images/bgHomeHeader.jpg"})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "85vh",
            }}
            className="bg-orange-50 flex flex-col items-center  md:px-10 sm:px-5 px-[75px] py-20 w-full"
          >
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center  max-w-[1290px] mx-auto w-full">
              <div
                style={{
                  backgroundColor: "#00000074",
                  padding: "30px",
                  textAlign: "center",
                }}
                className="flex flex-1 flex-col gap-[30px] items-start  w-full"
              >
                <div className="flex flex-col gap-[26px] items-start  w-full">
                  <Text
                    className="leading-[60.00px] w-full md:max-w-full sm:text-4xl md:text-[38px] text-[30px] text-black-900 tracking-[-0.50px] text-center"
                    size="txtPollerOneRegular40"
                  >
                    <span
                      style={{ color: "white" }}
                      className="text-black-900 font-raleway text-left font-bold"
                    >
                      Для тех, кто любит комфорт и качество
                    </span>
                  </Text>
                </div>
                <Button
                  style={{ color: "white" }}
                  className="common-pointer bg-bluegray-900 border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-center text-xl text-yellow-100 tracking-[-0.50px] m-auto"
                  onClick={() => navigate("/products")}
                >
                  Узнать больше
                </Button>
              </div>
              {/* <Img
                className="flex-1 md:flex-none h-[566px] sm:h-auto max-h-[566px] object-cover sm:w-[] md:w-[]"
                src="images/homeHeaderImg.jpg"
                alt="nathanoakleyo"
              /> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col mb-12 gap-[13px] items-center justify-start w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
              size="txtRalewayBold40"
            >
              <span className="text-black-900 font-raleway font-bold">
                Наш продукт
              </span>
            </Text>
            <Text
              className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
              size="txtRubikRegular18Gray500"
            >
              Изготовлен из лучших материалов и имеет дизайн, идущий в ногу со
              временем.
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1290px] mx-auto w-full"
            orientation="horizontal"
          >
            <div className="bg-gradient  flex flex-1 flex-col items-start justify-start sm:px-5 px-[30px] py-6 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-center justify-start w-full">
                <Link to="/room/1">
                  <Img
                    src="images/hasTwoRoom.jpg"
                    alt="sammoghadamkh"
                    style={{ width: "100%" }}
                  />
                </Link>
              </div>
            </div>
            <div className="bg-gradient  flex flex-1 flex-col items-start justify-start sm:px-5 px-[30px] py-6 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-center justify-start w-full">
                <Link to="/room/2">
                  <Img
                    src="images/hasThreeRoom.jpg"
                    alt="sammoghadamkh"
                    style={{ width: "100%" }}
                  />
                </Link>
              </div>
            </div>
            <div className="bg-gradient  flex flex-1 flex-col items-start justify-start sm:px-5 px-[30px] py-6 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-center justify-start w-full">
                <Link to="/room/3">
                  <Img
                    src="images/hasFourRoom.jpg"
                    alt="sammoghadamkh"
                    style={{ width: "100%" }}
                  />
                </Link>
              </div>
            </div>
            <div className="bg-gradient  flex flex-1 flex-col items-start justify-start sm:px-5 px-[30px] py-6 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-center justify-start w-full">
                <Link to="/room/4">
                  <Img
                    src="images/hasAllRoom.jpg"
                    alt="sammoghadamkh"
                    style={{ width: "100%" }}
                  />
                </Link>
              </div>
            </div>
          </List>
        </div>

        <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayBold40"
              >
                <span className="text-black-900 font-raleway font-bold">
                  Наш продукт
                </span>
              </Text>
              <Text
                className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
                size="txtRubikRegular18Gray500"
              >
                Изготовлен из лучших материалов и имеет дизайн, идущий в ногу со
                временем.
              </Text>
            </div>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <List
                    className="flex flex-col gap-[47px] items-center mx-2.5"
                    orientation="vertical"
                  >
                    <div className="gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/a4.jpg"
                      />
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/a3.jpg"
                      />
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/a2.jpg"
                      />
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/a1.jpg"
                      />
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/a6.jpg"
                      />
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/a5.jpg"
                      />
                    </div>
                  </List>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray-900 w-[15px]" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="flex gap-[15px] h-[15px] items-center justify-center max-w-[1289px] w-full"
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
        <div className="flex flex-col font-raleway items-center justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col font-rubik items-start justify-start w-full">
              <div className="md:gap-5 gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {homepageCardproductPropList.map((props, index) => (
                  <React.Fragment key={`HomepageCardproduct${index}`}>
                    <HomepageCardproduct
                      className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                      status="New"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-raleway items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-[50px] h-full items-start justify-start w-full">
              <Text
                className="leading-[60.00px] max-w-[602px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                size="txtRalewayRomanBold40"
              >
                Для тех, кто любит комфорт и качество
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRalewaySemiBold20"
                >
                  Двор жилого комплекса - это защищенна территория, где всё
                  продуманно для комфортной жизни. Созданы условия для занятий
                  спортом, а ваши дети смогут игра безопасности, во дворе без
                  машин, благо) системе car-free zone. Машины, кроме пожарной и
                  медицинской, не имеют досту на территорию двора. Для
                  автомобилей жильцов создано специальная многоуровневая
                  парковочная зона.
                </Text>
              </div>
            </div>
            <Img
              className="flex-1 md:flex-none md:h-[640px] sm:h-auto h-full max-h-[640px] object-cover sm:w-[] md:w-[]"
              src="images/img_rectangle16.png"
              alt="rectangleSixteen"
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

export default HomepagePage;
