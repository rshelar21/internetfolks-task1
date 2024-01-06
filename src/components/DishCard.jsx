import React from "react";
import styled from "styled-components";

const DishCard = ({receipe}) => {
  return (
    <>
      <CardBody>
        <CardImg src={`${receipe?.receipeImg}`} alt="receipe-img" />

        <CardDescription>
          <h3>{receipe?.title}</h3>
          <p>
          PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
          </p>

          <CardBtn>
            Read More
          </CardBtn>
        </CardDescription>
      </CardBody>
    </>
  );
};

const CardBody = styled.div`
  width: 381px;
  height: 555px;
  background-color: #fff;
  border-radius: 20px;
  border: 1.37px solid rgba(147, 162, 211, 0.38);
  padding : 28px;
`;

const CardImg = styled.img``;

const CardDescription = styled.div`
padding-top: 25px;
  h3 {
    color: var(--primary-color);
    font-family: var(--font-family-poppins);
    font-size: 21px;
    font-weight: 700;
    line-height: 27px; 
    /* text-align: center; */
  }
  p {
    padding-top: 14px;
    color: var(--font-gray-light);
    font-family: var(--font-family-open-sans);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    /* padding-left: 20px;
    padding-right: 20px; */
    letter-spacing: -0.3px;
  }
`;

const CardBtn = styled.button`
border : 1px solid var(--font-gray-color-4);
outline : none;
background-color: #fff;
color : var(--font-gray-color-4);
font-weight: 600;
font-size: 16px;
line-height: 36px;
font-family: var(--font-family-source-sans);
padding : 3px 23px;
border-radius: 21px;
margin-top: 27px;
cursor: pointer;  
`;

export default DishCard;
