import React from "react";

import { Button, Img, Input, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import Footer from "components/Footer";
import Header from "components/Header";
import CartSectionfooter from "components/CartSectionfooter";

const ContactusPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik  gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col ap-[75px] items-start justify-start w-full">
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
                className="flex flex-1 flex-col gap-[30px] items-center justify-center w-full"
              >
                <div className="flex flex-col gap-[26px] items-center justify-center w-full text-center">
                  <Text
                    className="leading-[60.00px] max-w-[615px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px] text-center "
                    size="txtPollerOneRegular40"
                  >
                    <span
                      style={{ color: "white" }}
                      className="text-black-900 font-raleway text-left font-bold"
                    >
                      Оставьте заявку
                    </span>
                    <br />
                    <span
                      style={{ color: "white" }}
                      className="text-black-900 font-raleway text-left font-bold"
                    >
                      {" "}
                      Оставьте контактные данные и мы обязательно свяжемся с
                      вами
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col font-raleway items-start justify-start md:px-10 sm:px-5 px-[75px] w-full ">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-start justify-start max-w-[1291px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                size="txtRalewayBold24"
              >
                Cвязаться с нами
              </Text>
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRalewayRomanSemiBold18"
                      >
                        Ваше имя
                      </Text>
                      <Input
                        name="frame48096015"
                        placeholder="Напишите здесь свое имя..."
                        className="font-rubik p-0 placeholder: sm:pr-5  text-left text-sm tracking-[-0.50px] w-full "
                        wrapClassName="border border-black-900  border-solid border-2 pl-[18px] pr-[35px] py-5 w-full"
                        type="text"
                      ></Input>
                    </div>
                    <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRalewayRomanSemiBold18"
                      >
                        Ваше электронной почты
                      </Text>
                      <Input
                        name="frame48096015_One"
                        placeholder="Напишите здесь свое электронный адрес..."
                        className="font-rubik p-0 placeholder: sm:pr-5  text-left text-sm tracking-[-0.50px] w-full"
                        wrapClassName="border border-black-900 border-solid  border-2 pl-[18px] pr-[35px] py-5 w-full"
                        type="email"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRalewayRomanSemiBold18"
                    >
                      Ваше комментарий
                    </Text>
                    <div className="border border-black-900  border-2 border-solid flex flex-col font-rubik h-[218px] md:h-auto items-start justify-start p-4 w-full">
                      <textarea
                        name=""
                        placeholder="Напишите здесь свое комментарий...."
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "none",
                          resize: "none",
                          backgroundColor: "#FEF9F4",
                        }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-poppins items-start justify-start w-full">
                  <Button className="bg-bluegray-900 border-2 border-black-900  border-solid cursor-pointer font-medium leading-[normal] min-w-[140px] py-[13px] text-base text-center text-white-A700 tracking-[-0.50px]">
                    Отправлять
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1291px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
        </div>

        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default ContactusPage;
