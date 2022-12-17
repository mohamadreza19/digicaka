import * as Icons from "@mui/icons-material";

import {
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { UiContext } from "../../contextApi/uiContext";
import { colors } from "../../styles/theme";

const data = [
  {
    title: "موبایل",
    submenu: [
      {
        subName: "برند های مختلف گوشی",
        child: ["گوشی اپل", "گوشی سامسونگ", "گوشی شیامی"],
      },
      {
        subName: "گوشی بر اساس قیمت",
        child: ["گوشی تا 2 میلیون تومان", "گوشی  تا 4 میلیون تومان"],
      },
      {
        subName: "گوشی بر اساس حافضه داخلی",
        child: ["گوشی تا 16 گیگ", "گوشی  تا 32 گیگ"],
      },
      {
        subName: "رزولوشن عکس",
        child: ["تا 12 پیکسل", "تا 24 پیکسل", "تا 32 پیکسل"],
      },
    ],

    icon: "Smartphone",
  },
  {
    title: "کالای دیجیتال",
    submenu: [
      {
        subName: "لوازم جانبی گوشی",
        child: [
          "کیف و کاور گوشی",
          "پاوربانک (شارژر همراه)",
          "پایه نگه دارنده گوشی",
        ],
      },
      {
        subName: "هدفون هدست هنز فری",
        child: [""],
      },
    ],

    icon: "Laptop",
  },
  {
    title: "خودرو,ابزار و تجهیزات صنعتی",
    submenu: [
      {
        subName: "خودروهای ایرانی وخارجی",
        child: [""],
      },
      {
        subName: "موتور سیکلت",
        child: [""],
      },
    ],

    icon: "Build",
  },
];

const MyBox = styled(Box)(() => ({
  position: "absolute",
  width: "1000px",
  height: "auto",
  top: "100px",
}));
const MyList = styled(List)(() => ({
  display: "flex",
}));
const RightMenuButtonBox = styled("div")(() => ({
  minWidth: "250px",
}));
const ListItemMenuBtn = styled(ListItemButton)(() => ({
  color: "#EE384E",
}));
const Title = styled(Typography)(() => ({
  marginLeft: "1rem",
}));
const IconBox = styled(Box)(() => ({}));
const TextBox = styled(ListItemText)(() => ({}));
const MyDivider = styled(Divider)(({}) => ({
  background: "black",
}));

const LeftSubList = ({ subData }) => {
  const MyBox = styled(Box)(() => ({
    width: "100%",
    marginTop: "0.5rem",
    marginLeft: "1rem",
  }));
  const TitleBox = styled(Box)(() => ({}));
  const Title = styled(Typography)(() => ({
    cursor: "pointer",
  }));
  const ItemBox = styled(Box)(() => ({
    width: "300px",
    display: "flex",
  }));
  //
  const ParentGrid = styled(Grid)(() => ({
    marginTop: "1rem",
  }));
  const ChildGrid = styled(Grid)(() => ({
    marginTop: "1rem",
  }));
  const ItemTitle = styled(Typography)(() => ({
    marginLeft: "0.5rem",
    "&:hover": {
      cursor: "pointer",
      color: "#ED1C24 !important",
    },
  }));
  const ColoredLine = styled(Divider)(() => ({
    backgroundColor: "#ED1C24",
    height: "1rem",
    width: "2px",
  }));
  const ItemChildBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
  }));
  const ItemChildText = styled(ItemTitle)(() => ({
    marginTop: "10px",
    color: colors.lightText,
  }));

  const KeyboardArrowLeft = Icons["KeyboardArrowLeft"];
  return (
    <MyBox >
      <TitleBox>
        <Title variant="body2">
          همه محصولات {subData.title} <KeyboardArrowLeft />{" "}
        </Title>
      </TitleBox>
      <ParentGrid container>
        {subData.submenu.map((item, index) => {
          return (
            <ChildGrid key={index} item lg={4}>
              <ItemBox>
                <ColoredLine variant="middle" orientation="vertical" flexItem />
                <ItemTitle variant="body1">
                  {item.subName}
                  <KeyboardArrowLeft />{" "}
                </ItemTitle>
              </ItemBox>
              <ItemChildBox>
                {item.child.map((childItem, index) => {
                  return (
                    <ItemChildText key={index} variant="caption">
                      {childItem}
                    </ItemChildText>
                  );
                })}
              </ItemChildBox>
            </ChildGrid>
          );
        })}
      </ParentGrid>
    </MyBox>
  );
};

export function MenuItems() {
  const { subItem, setSubItem } = useContext(UiContext);

  const MapedRightMenuButton = () => {
    const maped = data.map((d, index) => {
      const CustomIcon = Icons[d.icon];
      return (
        <ListItemMenuBtn onMouseEnter={() => setSubItem(d)} key={index}>
          <IconBox>
            <CustomIcon className="fill-red" />
          </IconBox>
          <Title variant="body2">{d.title}</Title>
        </ListItemMenuBtn>
      );
    });
    return <>{maped}</>;
  };

  return (
    <>
      <MyBox className="menu-parent">
        <MyList>
          <RightMenuButtonBox>
            <MapedRightMenuButton />
          </RightMenuButtonBox>
          <MyDivider orientation="vertical" flexItem />
          <LeftSubList subData={subItem} />
        </MyList>
      </MyBox>
    </>
  );
}
