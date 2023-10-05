import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";
import ThumbnailsExample from "components/ThumbSlide";
import CartSectionfooter from "components/CartSectionfooter";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import {
  bicycle,
  descriptionImg,
  dumbbell,
  fountain,
  homeIcon,
  houseTree,
  parking,
  run,
  securityCamera,
  shoppingCart,
  toboggan,
} from "assets/images";
import Header from "components/Header";

const ShopDetailDescriptionPage: React.FC = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    window.location.href = "https://accounts.google.com/";
  }

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[10px] w-full" />
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-col items-start justify-start pt-[75px] md:px-10 sm:px-5 px-[75px] w-full">
            <div className="flex md:flex-col flex-row gap-[47px] items-center justify-start max-w-[1290px] mx-auto w-full">
              <ThumbnailsExample />

              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-full">
                  <Text
                    className="max-w-[621px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.50px]"
                    size="txtRalewayRomanBold32Black900"
                  >
                    Что вы получаете с нами{" "}
                  </Text>

                  <div className="flex flex-col font-rubik gap-5 items-start justify-start w-full">
                    <div className="flex items-center justify-start gap-6 ">
                      <img src={homeIcon} alt="" className="w-8" />{" "}
                      <p className="font-bold	">
                        ЖИЛОЙ КОМПЛЕКС
                        <span className="block font-light">
                          Блок 'А" на 135 квартир
                        </span>
                        <span className="block font-light">
                          Блок 'Б- на о6 квастно
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center justify-start gap-6 ">
                      <img src={houseTree} alt="" className="w-8" />{" "}
                      <p className="font-bold	">ЗЕЛЁНАЯ ПРИРОДА</p>
                    </div>

                    <div className="flex items-center justify-start gap-6 ">
                      <img src={run} alt="" className="w-8" />{" "}
                      <p className="font-bold	">БЕГОВАЯ ДОРОЖКА</p>
                    </div>

                    <div className="flex items-center justify-start gap-6 ">
                      <img src={bicycle} alt="" className="w-8" />{" "}
                      <p className="font-bold	"> ВЕЛОСИПЕДНАЯ ДОРОЖКА</p>
                    </div>

                    <div className="flex items-center justify-start gap-6 ">
                      <img src={fountain} alt="" className="w-8" />{" "}
                      <p className="font-bold	">Фонтан</p>
                    </div>

                    <div className="flex items-center justify-start gap-6 ">
                      <img src={toboggan} alt="" className="w-8" />{" "}
                      <p className="font-bold	">ДЕТСКАЯ ПЛОЩАДКА</p>
                    </div>

                    <div className="flex items-center justify-start gap-6 ">
                      <img src={securityCamera} alt="" className="w-8" />{" "}
                      <p className="font-bold	">
                        КРУГЛОСУТОЧНОЕ СИСТЕМА ВИДЕОНАБЛЮДЕНИЕ И ОХРАНЯЕМЫЙ
                        ЖИЛОЙ КОМПЛЕКС
                      </p>
                    </div>

                    <div className="flex items-center justify-start gap-6 ">
                      <img src={shoppingCart} alt="" className="w-8" />{" "}
                      <p className="font-bold	">ТОРГОВЫЙ ЦЕНТР</p>
                    </div>

                    <div className="flex items-center justify-start gap-6 ">
                      <img src={parking} alt="" className="w-8" />{" "}
                      <p className="font-bold	">ПАРКОВКА</p>
                    </div>

                    <div className="flex items-center justify-start gap-6 ">
                      <img src={dumbbell} alt="" className="w-8" />{" "}
                      <p className="font-bold	">ТРЕНАЖЕРНЫЙ ЗАЛ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row gap-[49px] items-start justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-[42px] items-start justify-start w-full">
              <div className="flex flex-row font-josefinsans gap-[50px] items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-end justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl tracking-[-0.50px] w-auto"
                    size="txtJosefinSansRomanBold24"
                  >
                    Описание
                  </Text>
                  <Line className="bg-bluegray-900 h-1.5 w-full" />
                </div>
              </div>
              <Text
                className="leading-[35.00px] text-base text-gray-500 tracking-[-0.50px]"
                size="txtRubikRegular16"
              >
                <>
                  Совраанный мир диктуют свои правила жизни. Динамика больших
                  городов и повоодновная озета делоют босценными простью ващи
                  обыденные для провинциальных жителоя плоток чиотого овежего
                  воддуха, способный воодушевить любого человека, красивые
                  природные побасожи, дорящие ощущение счастья - ото то, чего
                  ток но хокет жИТелиМ больших городов. <br />
                  <br />
                  Разрабатывая проект «7 Residences, ны стромились воплютить в
                  нем вса потребности и мечты совроменных людей создать жилье
                  нового типа, и сдолать возмоным сочетание: комфорта
                  безопасности, сопромонного аронтектурного облика, хорошей
                  ежологии и ДоСТУПНоСТИ ЦеНІ
                  <br />
                </>
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-[21px] mt-24 items-center justify-start w-full h-full">
              <img src={descriptionImg} alt="" className="h-50 w-50 " />
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
          <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1290px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
        </div>
        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default ShopDetailDescriptionPage;
