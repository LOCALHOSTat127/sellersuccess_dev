import React from "react";
import Rating from "@mui/material/Rating";
import "./style.css";
import userOne from "../../assets/png/user.jpg";
import gmbImg from "../../assets/png/gmb.png";
import { ReactComponent as VerifyedSvg } from "../../assets/svg/verify.svg";

const Reviews = () => {
  return (
    <section className="reviews_outer">
      <div className="section_title_outer">
        <div className="heilighter"></div>
        <p className="section_title">Our clients review</p>
      </div>
      <div className="inner">
        <div className="track">
          <div className="review">
            <div className="photo_review">
              <div className="profile_photo">
                <img src={userOne} alt="user_profile" />
              </div>
              <Rating name="read-only" value={4} readOnly />
            </div>
            <h2 className="user_review">
              They have provided 100% results as they said.
            </h2>
            <div className="verify">
              <VerifyedSvg className="sm_svg" />
              <p>verified By</p>
              <img src={gmbImg} alt="google_my_business" />
            </div>
          </div>
          <div className="review">
            <div className="photo_review">
              <div className="profile_photo">
                <img src={userOne} alt="user_profile" />
              </div>
              <Rating name="read-only" value={4} readOnly />
            </div>
            <h2 className="user_review">
              They have provided 100% results as they said.
            </h2>
            <div className="verify">
              <VerifyedSvg className="sm_svg" />
              <p>verified By</p>
              <img src={gmbImg} alt="google_my_business" />
            </div>
          </div>
          <div className="review">
            <div className="photo_review">
              <div className="profile_photo">
                <img src={userOne} alt="user_profile" />
              </div>
              <Rating name="read-only" value={4} readOnly />
            </div>
            <h2 className="user_review">
              They have provided 100% results as they said.
            </h2>
            <div className="verify">
              <VerifyedSvg className="sm_svg" />
              <p>verified By</p>
              <img src={gmbImg} alt="google_my_business" />
            </div>
          </div>
          <div className="review">
            <div className="photo_review">
              <div className="profile_photo">
                <img src={userOne} alt="user_profile" />
              </div>
              <Rating name="read-only" value={4} readOnly />
            </div>
            <h2 className="user_review">
              They have provided 100% results as they said.
            </h2>
            <div className="verify">
              <VerifyedSvg className="sm_svg" />
              <p>verified By</p>
              <img src={gmbImg} alt="google_my_business" />
            </div>
          </div>
          <div className="review">
            <div className="photo_review">
              <div className="profile_photo">
                <img src={userOne} alt="user_profile" />
              </div>
              <Rating name="read-only" value={4} readOnly />
            </div>
            <h2 className="user_review">
              They have provided 100% results as they said.
            </h2>
            <div className="verify">
              <VerifyedSvg className="sm_svg" />
              <p>verified By</p>
              <img src={gmbImg} alt="google_my_business" />
            </div>
          </div>
          <div className="review">
            <div className="photo_review">
              <div className="profile_photo">
                <img src={userOne} alt="user_profile" />
              </div>
              <Rating name="read-only" value={4} readOnly />
            </div>
            <h2 className="user_review">
              They have provided 100% results as they said.
            </h2>
            <div className="verify">
              <VerifyedSvg className="sm_svg" />
              <p>verified By</p>
              <img src={gmbImg} alt="google_my_business" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
