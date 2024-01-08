import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <>
      <Container>
        <IntroBody>
          <LogoImg src="/assets/logo.svg" alt="" className="" />
          <Headings>
            <h1>
              Discover the <br />
              <span>Best</span> Food <br /> and Drinks
            </h1>
            <p>
              Naturally made Healthcare Products for the <br /> better care &
              support of your body.
            </p>
            <ExploreButton>Explore Now!</ExploreButton>
          </Headings>
        </IntroBody>

        <BannerImg>
          <ContactBtn>Get In Touch</ContactBtn>
          <DishBanner src="/assets/dish-banner.png" alt="" className="" />
          <BannerEdgeImg src="/assets/banner-edge.svg" alt="" className="" />
        </BannerImg>
      </Container>
    </>
  );
};

const Container = styled.div`
background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 0px;
    padding-bottom: 60px;
  }
`;
const IntroBody = styled.div`
  padding-top: 33px;
  padding-left: 100px;
  width: 50%;
  max-width: 50%;
  @media (max-width: 768px) {
    padding-top: 0px;
    padding-left: 0px;
    width: 100%;
    max-width: 100%;
  }
`;
const Headings = styled.div`
  padding-top: 111px;
  h1 {
    font-size: 62px;
    font-weight: 700;
    color: var(--primary-color);
    font-family: var(--font-family-source-sans);
    line-height: 69px;
    span {
      color: var(--secondary-color);
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 27px;
    color: var(--font-gray-light);
    font-family: var(--font-family-open-sans);
    padding-top: 26px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding-top: 50px;
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;
const ExploreButton = styled.button`
  background-color: var(--secondary-color);
  padding: 14px 34px;
  color: #fff;
  font-family: var(--font-family-open-sans);
  font-size: 18px;
  font-weight: 700;
  outline: none;
  border: none;
  border-radius: 34px;
  margin-top: 34px;
  letter-spacing: 0.18px;
  line-height: 36px;
  @media (max-width: 768px) {
    margin: 0 auto;
    display: block;
    margin-top: 28px;
  }
`;

const BannerImg = styled.div`
  position: relative;
  width: 50%;
  max-width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
const DishBanner = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BannerEdgeImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  @media (max-width: 1280px) {
    height: 100%;
  }
  @media (max-width: 768px) {
    height: 103%;
  }
`;

const ContactBtn = styled.button`
  border: 1px solid #fff;
  position: absolute;
  color: #fff;
  right: 40px;
  top: 30px;
  z-index: 20;
  background-color: transparent;
  font-family: var(--font-family-source-sans);
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.48px;
  padding: 3px 13px;
  border-radius: 21px;
  @media (max-width: 768px) {
    right: 20px;
    top: 20px;
    font-size: 14px;
  }
`;

const LogoImg = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Hero;
