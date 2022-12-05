import {
  styled,
  Box,
  InputBase,
  Button,
  ButtonGroup,
  Divider,
  Typography,
  Stack,
} from "@mui/material";

import { colors } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import {
  Login,
  ShoppingCartOutlined,
  Dehaze,
  ShoppingBasket,
  Whatshot,
  Discount,
  LocationOnOutlined,
} from "@mui/icons-material";
export const RootContainer = styled(Box)(() => ({
  width: "100%",
  borderBottom: "1px solid gray",
}));

export const ContainerRowOne = styled(Box)(() => ({
  width: "90%",
  display: "flex",
  margin: "1rem auto 0 auto",
}));
export const LogoBox = styled(Box)(() => ({
  width: "8%",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));
export const Logo = styled("img")(({ theme, src }) => ({
  width: "100%",
  src,
}));
export const SearchBox = styled(Box)(() => ({
  width: "42%",
  marginLeft: "1rem",
  backgroundColor: colors.gray,
  borderRadius: "8px",
}));
export const Search = () => {
  const MyInputBase = styled(InputBase)(() => ({
    // backgroundColor:'#F0F0F1',
    width: "100%",
    margin: "0 8px",
  }));

  const InputBox = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    margin: "0 8px",
  }));
  const Div = styled("div")(() => ({
    padding: "5px 0",
  }));
  return (
    <Div>
      <InputBox>
        <SearchIcon sx={{ color: "#A1A3A8" }} />
        <MyInputBase placeholder="جست و جو" />
      </InputBox>
    </Div>
  );
};

export const ActionButtonBox = styled(Box)(() => ({
  marginLeft: "auto",
}));

export const ActionButton = () => {
  const MyBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: `1px solid ${colors.gray}`,
    padding: "10px 12px",
    borderRadius: "8px",
  }));

  const MyLogin = styled(Login)(() => ({
    transform: "rotate(180deg)",
  }));
  const Div = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const DividerBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const MyDivider = styled(Divider)(() => ({
    width: "1px",
    height: "2rem",
    marginLeft: "0.5rem",
    marginRight: "1rem",
    backgroundColor: colors.gray,
  }));
  return (
    <Div>
      <MyBox>
        <MyLogin />
        <span className="ms-2">ورود</span>
        <span className="ms-2 me-2">| </span>
        <span className=""> ثبت نام</span>
      </MyBox>
      <DividerBox>
        <MyDivider orientation="vertical" flexItem />
      </DividerBox>

      <ShoppingCartOutlined />
    </Div>
  );
};

// ContainerRowTwo
export const ContainerRowTwo = styled(Box)(() => ({
  width: "90%",
  display: "flex",
  margin: "1rem auto 0 auto",
}));

export const ListBox = styled(Box)(() => ({
  display: "flex",
}));
export const EachItemListBox = styled(Box)(() => ({}));

export const StartButton = (props) => {
  const MyBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "2px solid #EE384E",
    },
  }));
  const Content = styled(Typography)(() => ({
    marginLeft: "6px",
    fontWeight: "bold",
  }));

  return (
    <MyBox {...props}>
      <Dehaze fontSize="3px" />
      <Content variant="body1">{props.children}</Content>
    </MyBox>
  );
};

export const MainButtons = (props) => {
  const Parent = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));
  const MyBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "1rem",
    cursor: "pointer",
    borderBottom: "2px solid white",
    "&:hover": {
      borderBottom: "2px solid #EE384E",
    },
  }));
  const Content = styled(Typography)(() => ({
    marginLeft: "6px",
    fontWeight: "200",
    color: "#62666D",
  }));

  return (
    <Parent>
      <MyBox className="mame">
        <ShoppingBasket sx={{ color: "#62666D" }} fontSize="3px" />
        <Content variant="body1">سوپرمارکت</Content>
      </MyBox>
      <MyBox>
        <Whatshot sx={{ color: "#62666D" }} fontSize="3px" />
        <Content variant="body1">پر فروش ترین ها</Content>
      </MyBox>
      <MyBox>
        <Discount sx={{ color: "#62666D" }} fontSize="3px" />
        <Content variant="body1">تخفیف و پیشنهادات</Content>
      </MyBox>
    </Parent>
  );
};

export const EndListBox = styled(Box)(() => ({
  marginLeft: "auto",
}));
export const EndButtons = (props) => {
  const Parent = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));
  const MyBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "1rem",
    cursor: "pointer",
    borderBottom: "2px solid white",
  }));
  const Content = styled(Typography)(() => ({
    marginLeft: "6px",
    fontWeight: "200",
    color: "#62666D",
  }));

  return (
    <Parent>
      <MyBox className="mame">
        <LocationOnOutlined sx={{ color: "#62666D" }} fontSize="3px" />
        <Content variant="body1">لطفا شهر خود را انتخاب کنید</Content>
      </MyBox>
    </Parent>
  );
};
