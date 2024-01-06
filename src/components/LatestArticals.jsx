import React, { useState, useRef } from "react";
import DishCard from "./DishCard";
import styled from "styled-components";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { receipelists } from "../constants/index";

const LatestArticals = () => {
  const scrollRef = useRef(null);
  const [activeScroll, setActiveScroll] = useState(false);
  const Prev = () => {
    if (!activeScroll) {
      return;
    }
    scrollRef.current.scrollLeft -= 1500;
    setActiveScroll(false);
  };

  const Next = () => {
    if (activeScroll) {
      return;
    }
    scrollRef.current.scrollLeft += 1500;
    setActiveScroll(true);
  };

  return (
    <>
      <Conatianer>
        <h1>Latest Articles</h1>

        <SliderBody ref={scrollRef} className="slider">
          {receipelists.map((item) => {
            return <DishCard key={item.id} receipe={item} />;
          })}
        </SliderBody>

        <ScrollBtns>
          <LeftScrollBtn onClick={Prev} activeScroll={activeScroll}>
            <ChevronLeftIcon
              className=""
              style={{ width: "20px", height: "20px" }}
            />
          </LeftScrollBtn>

          <ScrollValue>{activeScroll ? "2" : "1"} / 2</ScrollValue>
          <RightScrollBtn onClick={Next} activeScroll={activeScroll}>
            <ChevronRightIcon
              className=""
              style={{ width: "20px", height: "20px" }}
            />
          </RightScrollBtn>
        </ScrollBtns>
      </Conatianer>
    </>
  );
};

const Conatianer = styled.div`
  padding: 0 108px;
  h1 {
    color: var(--primary-color);
    font-family: var(--font-family-source-sans);
    font-size: 56px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: 2px;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  padding-bottom: 50px;
  @media (max-width: 768px) {
    padding: 0 40px;
    padding-top: 80px;
    padding-bottom: 50px;
    h1 {
      text-align: center;
      font-size: 35px;
    }
  }
`;

const SliderBody = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  overflow-x: hidden;
  transition: all 0.5s ease;
  scroll-behavior: smooth;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 1550px;
    overflow-y: hidden;
    gap: 30px;
    flex-wrap: wrap;
  }
`;

const ScrollBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const LeftScrollBtn = styled.div`
  color: ${(props) =>
    props.activeScroll ? ` var(--font-gray-color-4)` : `#AFAFAF`};
  border: 2px solid;
  border-radius: 5px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-color: ${(props) =>
    props.activeScroll ? `var(--font-gray-color-4)` : `#AFAFAF`};
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const RightScrollBtn = styled.div`
  color: ${(props) =>
    props.activeScroll ? `#AFAFAF` : `var(--font-gray-color-4)`};
  border: 2px solid;
  border-radius: 5px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-color: ${(props) =>
    props.activeScroll ? `#AFAFAF` : `var(--font-gray-color-4)`};
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const ScrollValue = styled.span`
  color: var(--font-gray-color-4);
  font-family: var(--font-family-source-sans);
  font-size: 22px;
  font-weight: 400;
  line-height: 27px;
`;
export default LatestArticals;
