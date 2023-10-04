import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";
import React from "react";
import { useParams } from "react-router-dom";

const InfoEachRoom = () => {
  const params = useParams();

  console.log("knn", params.id);

  return (
    <div>
      <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" />
      body og
      <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
    </div>
  );
};

export default InfoEachRoom;
