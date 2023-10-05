import React from "react";

import { Button, Img, List, PagerIndicator, Slider, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartSectionfooter from "components/CartSectionfooter";
import TeamCardteam from "components/TeamCardteam";
import Header from "components/Header";

const AboutusPage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[50px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[10px] w-full" />

        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
              <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                <div className="flex flex-col gap-[10px] items-start justify-start w-full">
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
                    Разрабатывая проект «7 Residence», мы стремились воплотить в
                    нем все потребно и мечты современных людей, создать жилі
                    нового типа, и сделать возможным сочета комфорта,
                    безопасности, современного архитектурного облика, хорошей
                    экологии доступности цен!
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
                  <Text
                    className="leading-[35.00px] max-w-[626px] md:max-w-full text-base text-gray-500 tracking-[-0.50px]"
                    size="txtRubikRegular16"
                  >
                    Современный мир диктует свои правила жизни. Динамика больших
                    городов и повседневная суета делает бесценными простые вещи,
                    обыденные для провинциальных жителей. Глоток чистого свежего
                    воздуха, способный воодушевить любого человека, красивые
                    природные пеизажи, дарящие ощущение счастья - это то, чего
                    так не хватает жителям больших городов.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start w-full"></div>
            </div>
            <Img
              className="h-[650px] sm:h-auto max-h-[650px] object-cover rounded-bl-[300px] rounded-tl-[300px] rounded-tr-[300px] sm:w-[] md:w-[]"
              src="images/b1.jpg"
              alt="rectangle1492"
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
