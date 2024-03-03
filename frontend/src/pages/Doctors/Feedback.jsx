import React from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";

const Feedback = () => {
  return( <div>
    <div className="mb-[50px]">
      <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
        All reviews (272)
      </h4>

      <div className="flex justify-between gap-10 mb-[30px]">
        <div className="flex gap-3">
          <figure className="w-10 h-10 rounded-full">
            <img className="w-full" src={avatar} alt=""/>
          </figure>

          <div>
            <h5 className="text-[16px] leading-4 text-primaryColor font-bold">
              Ashish Singh
            </h5>
            <p className="text-[14px] leading-6 text-textColor">
              {formateDate("07 July, 2008")}
            </p>
            <p className="text__para mt-3 font-medium text-[15px]">Good Services, highly recommended 👍</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Feedback;