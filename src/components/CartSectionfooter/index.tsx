import React from "react";

import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";

type CartSectionfooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const CartSectionfooter: React.FC<CartSectionfooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[149px] items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-53 tracking-[-0.50px] w-auto"
                size="txtRalewayRomanBold32Gray53"
              >
                <Link to="/">SEVEN RESIDENCE.</Link>
              </Text>
              <Text
                className="leading-[35.00px] max-w-[360px] md:max-w-full text-base text-gray-50_a3 tracking-[-0.50px]"
                size="txtRubikRegular16Gray50a3"
              >
                Для тех, кто любит комфорт и качество
              </Text>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-[209px]">
              <Text
                className="text-gray-53 text-xl tracking-[-0.50px] w-auto"
                size="txtRalewayRomanSemiBold20Gray53"
              >
                Карта сайта
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Link to={"/"}>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto cursor-pointer"
                    size="txtRubikRegular14Gray50a3"
                  >
                    Главная
                  </Text>
                </Link>
                <Link to={"/products"}>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto cursor-pointer "
                    size="txtRubikRegular14Gray50a3"
                  >
                    Продукты
                  </Text>
                </Link>
                <Link to={"/aboutus"}>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto cursor-pointer"
                    size="txtRubikRegular14Gray50a3"
                  >
                    О нас
                  </Text>
                </Link>
                <Link to={"/contactus"}>
                  <Text
                    className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto cursor-pointer"
                    size="txtRubikRegular14Gray50a3"
                  >
                    Контакты
                  </Text>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-[209px]">
              <Text
                className="text-gray-53 text-xl tracking-[-0.50px] w-auto"
                size="txtRalewayRomanSemiBold20Gray53"
              >
                Информация
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto "
                  size="txtRubikRegular14Gray50a3"
                >
                  (99) 502 70 07
                </Text>
                <Text
                  className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto"
                  size="txtRubikRegular14Gray50a3"
                >
                  (95) 502 70 07
                </Text>
                <Text
                  className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto"
                  size="txtRubikRegular14Gray50a3"
                >
                  @Seven_Residence
                </Text>
                <Text
                  className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto"
                  size="txtRubikRegular14Gray50a3"
                >
                  Адрес: г. Ташкент, Сергалийский р-н, Сергели-7, ул. Мирзы
                  Турсунзаде
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-[220px]">
              <Text
                className="text-gray-53 text-xl tracking-[-0.50px] w-auto"
                size="txtRalewayRomanSemiBold20Gray53"
              >
                Подписывайтесь на нас
              </Text>
              <div className="flex flex-row gap-5 items-start justify-start w-auto">
                <Button className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                  <Img
                    className="h-6"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                </Button>
                <Button className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                  <Img
                    className="h-6"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </Button>
                <Button className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                  <Img
                    className="h-6"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                </Button>
                <Button className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                  <Img className="h-6" src="images/img_music.svg" alt="music" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <Text
              className="text-base text-gray-50_a3 tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular16"
            >
              © Copyright 2022. All Rights Reserved.
            </Text>
            <div className="flex flex-row gap-[41px] items-start justify-start w-[272px]">
              <Text
                className="flex-1 text-base text-gray-50_a3 tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular16"
              >
                Terms of condition
              </Text>
              <Text
                className="text-base text-gray-50_a3 tracking-[-0.50px] w-auto"
                size="txtRubikRomanRegular16"
              >
                Privacy Policy
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

CartSectionfooter.defaultProps = {};

export default CartSectionfooter;
