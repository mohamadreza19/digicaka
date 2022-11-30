import { Box, styled } from "@mui/material";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { ButtonBox, Container, DotIcon } from "../../styles/appmain";

export function CarouselImageSlider() {
  const [counter, setCounter] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const container = useRef(0);
  const data = [
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/165f27bd204f7cf46a71da07e1cf499e170f6f5a_1668502891.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/49d1bc3107926f635c4457fa8bfd53a8a4528df7_1668335427.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/78f4f3986a6d2efbbf76f1b176c346b9567c6e6f_1668266678.jpg?x-oss-process=image/quality,q_95",
    "https://dkstatics-public.digikala.com/digikala-adservice-banners/c7a0650e84cb7237e9e557dfb1c52a99c21db153_1668408420.jpg?x-oss-process=image/quality,q_95",
  ];
  // console.log(container.current.clientHeight);
  useEffect(() => {
    if (!mouseOver) {
      const timer = setInterval(function () {
        setCounter((pre) => (pre + 1) % data.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [mouseOver]);
  return (
    <>
      <Container ref={container}>
        <img style={{ width: "100%" }} src={data[counter]} />
        <ButtonBox
          parentheight={container.current.clientHeight}
          onMouseOver={() => {
            setMouseOver(true);
          }}
          onMouseOut={() => {
            setMouseOver(false);
          }}
        >
          {data.map((d, index) => {
            return (
              <DotIcon
                active={index === counter ? true : false}
                key={index}
                onClick={() => {
                  setCounter(index);
                }}
              />
            );
          })}
        </ButtonBox>
      </Container>
    </>
  );
}
