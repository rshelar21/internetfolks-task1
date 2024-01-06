import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Container>
        <FooterBody>
          <div>
            <FooterLogo src="/assets/logo.svg" alt="" className="" />
          </div>

          <FooterLinks>
            <ContactLinks>
              <h4>Contact Us</h4>
              <ul>
                <li>
                  Lorem Ipsum Pvt Ltd.5/1, Magalton <br />
                  Road, Phartosh Gate near YTM <br />
                  Market, XYZ-343434
                </li>
                <li>example2020@gmail.com</li>
                <li>(904) 443-0343</li>
              </ul>
            </ContactLinks>

            <ContactLinks>
              <h4>More</h4>
              <ul>
                <li>About Us</li>
                <li>Products</li>
                <li>Career</li>
                <li>Contact Us</li>
              </ul>
            </ContactLinks>

            <SocialMediaLinks>
              <div>
                <h4>Social Links</h4>
                <ul>
                  <li>
                    <img src="/assets/facebook.svg" alt="" />
                  </li>
                  <li>
                    <img src="/assets/instagram.svg" alt="" />
                  </li>
                  <li>
                    <img src="/assets/twitter.svg" alt="" />
                  </li>
                  <li>
                    <img src="/assets/linkedin.svg" alt="" />
                  </li>
                </ul>
              </div>
              <CopyrightText>© 2022 Food Truck Example</CopyrightText>
            </SocialMediaLinks>
          </FooterLinks>
        </FooterBody>
      </Container>
    </>
  );
};

const Container = styled.footer`
  background-color: var(--bg-gray-color);
`;

const FooterBody = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 84px;
  padding-bottom: 92px;
  /* background-color: green; */
  gap: 200px;
`;
const FooterLogo = styled.img`
  width: 161px;
  height: 125px;
  object-fit: contain;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 200px;
  /* background-color: red; */
  /* max-width: 1000px; */
  /* margin: 0 auto; */
`;

const ContactLinks = styled.div`
  /* width: 100%;
  max-width: 450px; */
  h4 {
    color: var(--primary-color);
    font-family: var(--font-family-source-sans);
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0.55px;
  }
  li {
    list-style: none;
    color: var(--font-gray-light-2);
    font-family: var(--font-family-source-sans);
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    padding-bottom: 15px;

    &:last-child {
      padding-bottom: 0;
    }
    &:first-child {
      padding-top: 12px;
    }
  }
`;

const SocialMediaLinks = styled.div`
  /* width: 100%; */
  /* max-width: 350px; */
  display: flex;
  flex-direction: column;
  gap : 80px;
  h4 {
    color: var(--primary-color);
    font-family: var(--font-family-source-sans);
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0.55px;
  }
  ul {
    padding-top: 15px;
  }
  li {
    list-style: none;
    display: inline-block;
    padding: 0 15px;

    &:first-child {
      padding-left: 0;
    }
  }
`;

const CopyrightText = styled.p`
  color: var(--font-gray-light-3);
  text-align: center;
  font-family: var(--font-family-roboto);
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  margin-left: -80px;
`;
export default Footer;
