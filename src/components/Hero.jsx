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
              Discover the <br /><span>Best</span> Food <br /> and Drinks
            </h1>
            <p>
              Naturally made Healthcare Products for the <br /> better care & support
              of your body.
            </p>
            <ExploreButton>Explore Now!</ExploreButton>
          </Headings>
        </IntroBody>

        {/* right */}
        <BannerImg>
          <ContactBtn>
            Get In Touch
          </ContactBtn>
          <DishBanner src="/assets/dish-banner.png" alt="" className="" />
          <BannerEdgeImg src="/assets/banner-edge.svg" alt="" className=''/>
        </BannerImg>

      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const IntroBody = styled.div`
  padding-top: 33px;
  padding-left: 100px;
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
`;

const BannerImg = styled.div`
position: relative;
`;
const DishBanner = styled.img`
/* z-index: 10; */
position: relative;
`;

const BannerEdgeImg = styled.img`
position: absolute;
top: 0;
right: 0;
z-index: 1;
`;

const ContactBtn = styled.button`
border: 1px solid #fff;
position: absolute;
color : #fff;
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
`;

const LogoImg = styled.img``;



export default Hero;
