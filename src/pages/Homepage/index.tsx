import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, PagerIndicator, Slider, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";

import CartSectionfooter from "components/CartSectionfooter";
import HomepageCardproduct from "components/HomepageCardproduct";
import Header from "components/Header";

const HomepagePage: React.FC = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  // const homepageCardproductPropList = [
  //   { save: "images/products/img_save.svg" },
  //   { image: "images/products/img_image_7.png" },
  //   { image: "images/products/img_image_8.png" },
  //   { image: "images/products/img_image_9.png" },
  //   { image: "images/products/img_image_10.png" },
  //   { image: "images/products/img_image_11.png" },
  //   { image: "images/products/img_image_12.png" },
  //   { image: "images/products/img_image_13.png" },
  // ];
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
          {/* <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" /> */}
          <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[10px] w-full" />

          <div
            style={{
              backgroundImage: `url(${"images/bgHomeHeader.jpg"})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "85vh",
            }}
            className="bg-orange-50 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] py-20 w-full"
          >
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1290px] mx-auto w-full">
              <div
                style={{ backgroundColor: "#00000074", padding: "20px" }}
                className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full"
              >
                <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                  <Text
                    className=" text-xl tracking-[-0.50px] w-full"
                    size="txtRubikRomanRegular20"
                    style={{ color: "white" }}
                  >
                    Interior Needs
                  </Text>
                  <Text
                    className="leading-[60.00px] max-w-[615px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                    size="txtPollerOneRegular40"
                  >
                    <span
                      style={{ color: "white" }}
                      className="text-black-900 font-raleway text-left font-bold"
                    >
                      Various{" "}
                    </span>
                    <span
                      style={{ color: "white" }}
                      className="text-bluegray-900 font-raleway text-left font-bold"
                    >
                      new collections
                    </span>
                    <span
                      style={{ color: "white" }}
                      className="text-black-900 font-raleway text-left font-bold"
                    >
                      {" "}
                      of furniture to decorate the corner of your house.
                    </span>
                  </Text>
                </div>
                <Button
                  style={{ color: "white" }}
                  className="common-pointer bg-bluegray-900 border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-center text-xl text-yellow-100 tracking-[-0.50px]"
                  onClick={() => navigate("/products")}
                >
                  Shop Now
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
                    className="flex flex-1 flex-col gap-4 items-start justify-start "
                    image="images/home/twoRoom1.png"
                    link="2"
                  />
                  <HomepageCardproduct
                    className="flex flex-1 flex-col gap-4 items-start justify-start "
                    image="images/home/threeRoom1.png"
                    link="3"
                  />

                  <HomepageCardproduct
                    className="flex flex-1 flex-col gap-4 items-start justify-start "
                    image="images/home/fourRoom1.png"
                    link="4"
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

        <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayBold40"
              >
                <span className="text-black-900 font-raleway font-bold">
                  Our{" "}
                </span>
                <span className="text-black-900 font-raleway font-bold">
                  Newest
                </span>
                <span className="text-black-900 font-raleway font-bold">
                  {" "}
                  Product
                </span>
              </Text>
              <Text
                className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
                size="txtRubikRegular18Gray500"
              >
                Made of the best materials and with a design that follows the
                times
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
                  className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl tracking-[-0.50px] w-full"
                  size="txtRubikRegular24"
                >
                  Interior Modern
                </Text>
                <Text
                  className="leading-[60.00px] max-w-[525px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                  size="txtRalewayRomanBold40"
                >
                  Arrange your home in such a way with our modern interiors
                </Text>
              </div>
              <Button
                className="common-pointer border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-bluegray-900 text-center text-xl tracking-[-0.50px]"
                onClick={() => navigate("/shopdetaildescription")}
              >
                Shop Now
              </Button>
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
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-bluegray-900 text-center tracking-[-0.50px] w-full"
              size="txtRalewayRomanBold32"
            >
              New Arrival
            </Text>
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
                We guarantee the safety of your shopping
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="sm:gap-5 gap-[50px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        Fast Shipping
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        Safe Delivery
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        365 Days Return
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="images/img_call.svg"
                      alt="call"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        24 hours CS
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="flex-1 md:flex-none md:h-[640px] sm:h-auto h-full max-h-[640px] object-cover sm:w-[] md:w-[]"
              src="images/img_rectangle16.png"
              alt="rectangleSixteen"
            />
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewaySemiBold40"
              >
                Read Our Latest Blog
              </Text>
              <Text
                className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
                size="txtRubikRegular18Gray500"
              >
                We write various things related to furniture, from tips and what
                things I need to pay attention to when choosing furniture
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              {homepageCardblogPropList.map((props, index) => (
                <React.Fragment key={`HomepageCardblog${index}`}>
                  <HomepageCardblog
                    className="flex flex-1 flex-col gap-2 items-start justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
        </div> */}
        <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1290px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
        </div>
        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default HomepagePage;
