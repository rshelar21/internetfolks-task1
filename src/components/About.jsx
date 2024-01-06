import React from "react";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <>
      <Container>
        <AboutBody>
          <ImageBanner>
            <CookingImg src="/assets/about.svg" alt="" className="" />
          </ImageBanner>
          <AboutDescription>
            <h2>About Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. t has survived
              not only five centuries.
            </p>
            <ReadMoreBtn>Read More</ReadMoreBtn>
          </AboutDescription>
        </AboutBody>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-top: 186px;
  padding-bottom: 157px;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

const AboutBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1080px;
  padding: 0 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageBanner = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const CookingImg = styled.img``;

const AboutDescription = styled.div`
  width: 100%;
  max-width: 450px;
  background: linear-gradient(
    90deg,
    rgba(30, 42, 93, 0.04) 30.91%,
    rgba(48, 62, 130, 0.04) 64.79%,
    rgba(60, 80, 157, 0.04) 91.94%
  );
  h2 {
    font-size: 45px;
    font-weight: 600;
    line-height: 27px;
    color: var(--primary-color);
    font-family: var(--font-family-poppins);
  }
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 27px;
    color: var(--font-gray-light);
    font-family: var(--font-family-open-sans);
    padding-top: 28px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

const ReadMoreBtn = styled.button`
  display: flex;
  width: 132px;
  height: 42px;
  padding: 3px 26px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background-color: var(--secondary-color);
  color: #fff;
  border-radius: 21px;
  font-family: var(--font-family-source-sans);
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.48px;
  margin-top: 22px;
  @media (max-width: 768px) {
    margin: 0 auto;
    display: block;
    margin-top: 28px;
  }
`;

export default AboutSection;
