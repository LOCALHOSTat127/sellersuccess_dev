import React from "react";
import Rating from "@mui/material/Rating";
import "./style.css";
import userOne from "../../assets/png/user.jpg";
import gmbImg from "../../assets/png/gmb.png";
import { ReactComponent as VerifyedSvg } from "../../assets/svg/verify.svg";
import Avatar from '@mui/material/Avatar';
const Reviews = () => {
  const truncatetxt = (txt) =>{
    return `${String(txt).slice(0,40)} ...`
  }


  const reviews = [
    {
      user_name: "Nirmal Pareek",
      review_txt:
        "Best service provider for ecommerce sellers They provide me hand holding supports",
      rating: 4,
    },
    {
      user_name: "Ankit Prajapatik",
      review_txt:
        "They boosted my Amazon sells by almost 85% its amazing 👍",
      rating: 4.2,
    },
    {
      user_name: "Jaipur Tourism",
      review_txt:
        "Best E-commerce management provided office staff is so polite and professional also",
      rating: 4.9,
    },
    {
      user_name: "Rahul Khatri",
      review_txt:
        "They built a marketing funnel for my business that is taking huge amount of buyers for my business",
      rating: 3.5,
    }
  ];

  return (
    <section className="reviews_outer">
      <div className="section_title_outer">
        <div className="heilighter"></div>
        <p className="section_title">Our clients review</p>
      </div>
      <div className="inner">
        <div className="track">
          {reviews &&
            reviews.map(({user_name,review_txt,rating}) => {
              return (
                <div className="review">
                  <div className="photo_review">
                    <div className="profile_photo">
                    <Avatar sx={{ 
                      bgcolor: "orange",
                      width : "100%",
                      height  : "100%"
                      }}>{`${String(user_name).split(" ")[0][0]} ${String(user_name).split(" ")[1][0]}`}</Avatar>
                    </div>
                    <Rating name="read-only" value={rating} readOnly />
                  </div>
                  <h2 className="user_review">
                  {truncatetxt(review_txt)}
                  </h2>
                  <div className="verify">
                    <VerifyedSvg className="sm_svg" />
                    <p>verified By</p>
                    <img src={gmbImg} alt="google_my_business" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
