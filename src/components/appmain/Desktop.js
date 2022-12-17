import { CarouselImageSlider } from "./CarouselImageSlider";
import {
  MiddleContainer,
  LogoBox,
  Logo,
  LogoCaption,
  LogoesBox,
  LogoCaptionBox,
  HandllyCarouselBox,
} from "../../styles/appmain/index";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { HandllyCarousel } from "./HandlyCarousel";
import Fresh from "./Fresh";
import { DigikalaOrder } from "./DigikalaOrder";

const logos = [
  {
    link: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png",
    text: "دیجی کالا جت",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png",
    text: "حراج استایل",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png",
    text: "خرید اقساطی",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-bellatrix/998d85bee1430ea77056670c9a6bf75a0cd86206_1654602837.png",
    text: "خرید عمده و سازمانی",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-bellatrix/44beb32c273367694c3e60837aa1cf5f4782215b_1667994992.png",

    text: "پیشنهاد روز موبایل",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-bellatrix/f6062de290f625752fd977bd3e3ac3d8e8437f24_1667910429.png",

    text: "چرخ و بخت",
  },
  {
    link: "https://dkstatics-public.digikala.com/digikala-bellatrix/f6062de290f625752fd977bd3e3ac3d8e8437f24_1667910429.png",
    text: "چرخ و بخت",
  },
];

export function Desktop() {
  const MappedLogos = () => {
    const mappedLogos = logos.map((logo, index) => {
      return (
        <LogoBox key={index}>
          <Logo src={logo.link} />
          <LogoCaptionBox>
            <LogoCaption>{logo.text}</LogoCaption>
          </LogoCaptionBox>
        </LogoBox>
      );
    });
    return (
      <>
        {mappedLogos}
        <LogoBox>
          <MoreHorizIcon
            sx={{ width: "50%", height: "50px", fontSize: "2rem" }}
          />
          <LogoCaptionBox>
            <LogoCaption>بیشتر</LogoCaption>
          </LogoCaptionBox>
        </LogoBox>
      </>
    );
  };
  return (
    <div>
      <CarouselImageSlider />
      <MiddleContainer>
        <LogoesBox>
          <MappedLogos />
        </LogoesBox>
        <HandllyCarousel />
        {/* <Fresh /> */}
        <DigikalaOrder />
      </MiddleContainer>
    </div>
  );
}
