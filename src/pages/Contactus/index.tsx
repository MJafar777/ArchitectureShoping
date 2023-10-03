import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import Footer from "components/Footer";
import Header from "components/Header";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ContactusPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik  gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col ap-[75px] items-start justify-start w-full">
          <Header className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
          <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
            <div className="flex flex-col items-start justify-start max-w-[1291px] mx-auto w-full">
              <div className="h-full relative w-full">
                <Img
                  className="h-full m-auto object-cover w-full"
                  src="images/a1.jpg"
                  alt="rectangleTwentyEight"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-raleway items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[71px] items-start justify-start max-w-[1291px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.50px] w-full"
                size="txtRalewayBold24"
              >
                Contact Us
              </Text>
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRalewayRomanSemiBold18"
                      >
                        Your Name
                      </Text>
                      <Input
                        name="frame48096015"
                        placeholder="Write your name here...."
                        className="font-rubik p-0 placeholder: sm:pr-5  text-left text-sm tracking-[-0.50px] w-full"
                        wrapClassName="border border-bluegray-100 border-solid pl-[18px] pr-[35px] py-5 w-full"
                        type="text"
                      ></Input>
                    </div>
                    <div className="flex flex-1 flex-col gap-[17px] items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px] w-auto"
                        size="txtRalewayRomanSemiBold18"
                      >
                        Your Email
                      </Text>
                      <Input
                        name="frame48096015_One"
                        placeholder="Write your email here...."
                        className="font-rubik p-0 placeholder: sm:pr-5  text-left text-sm tracking-[-0.50px] w-full"
                        wrapClassName="border border-bluegray-100 border-solid pl-[18px] pr-[35px] py-5 w-full"
                        type="email"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRalewayRomanSemiBold18"
                    >
                      Your Comment
                    </Text>
                    <div className="border border-bluegray-100 border-solid flex flex-col font-rubik h-[218px] md:h-auto items-start justify-start p-4 w-full">
                      <textarea
                        name=""
                        placeholder="Write your review here...."
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
                  <Button className="bg-bluegray-900 border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[140px] py-[13px] text-base text-center text-white-A700 tracking-[-0.50px]">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-rubik items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <CartColumnframe48095972 className="bg-gradient  flex flex-col gap-2 items-start justify-start max-w-[1291px] mx-auto pl-[59px] md:px-5 py-[46px] w-full" />
        </div>
        <Footer className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default ContactusPage;
