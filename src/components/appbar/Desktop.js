import {
  ArrowBackIosNew,
  Close,
  KeyboardArrowUp,
  MobileFriendly,
} from "@mui/icons-material";
import {
  AppBar,
  Dialog,
  DialogTitle,
  Divider,
  Fab,
  Fade,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useContext, useState } from "react";
import useLocalStorage from "react-use-localstorage";
import { Link } from "react-router-dom";
import { useImmer } from "use-immer";
import { UiContext } from "../../contextApi/uiContext";
import {
  ActionButton,
  ActionButtonBox,
  ContainerRowOne,
  ContainerRowTwo,
  EachItemListBox,
  EndButtons,
  EndListBox,
  ListBox,
  Logo,
  LogoBox,
  MainButtons,
  RootContainer,
  Search,
  SearchBox,
  StartButton,
} from "../../styles/appbar/desktop";
import { MenuItems } from "./MenuItems";
import { Box } from "@mui/system";
export function Desktop(props) {
  const { openMenuItems, setOpenMenu, cities } = useContext(UiContext);

  const [subCities, seSubCities] = useImmer({
    city: "init",
    subCity: ["init"],
  });
  const [isOpenDialog, setIsOpenDialog] = useImmer(false);
  //LOCAL Storge

  const [selectedCity, setSelectedCity] = useLocalStorage(
    "selected-city",
    "init"
  );

  //
  function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#back-to-top-anchor"
      );

      if (anchor) {
        anchor.scrollIntoView({
          block: "center",
        });
      }
    };

    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }

  //
  const CitiesDialog = (props) => {
    const { onClose, open } = props;
    const DialogTitleBox = () => {
      return (
        <div id="DialogTitle">
          <Typography variant="body1" className="font-weight-bold ">
            انتخاب شهر
          </Typography>
          <span onClick={() => setIsOpenDialog(false)}>
            {" "}
            <Close className="cur-pointer" />
          </span>
        </div>
      );
    };
    const CitiesBox = () => {
      return (
        <div id="CitiesBox" className="mt-1rm">
          {subCities.city === "init"
            ? cities.map((city, index) => {
                return (
                  <section
                    key={index}
                    className=" d-flex justify-content-space-between"
                    onClick={() => {
                      seSubCities((draft) => {
                        draft.city = city.city;
                        draft.subCity = city.subCities;
                      });
                    }}
                  >
                    <Typography variant="body1 font-weight-bold">
                      {city.city}
                    </Typography>

                    <ArrowBackIosNew fontSize="small" />
                  </section>
                );
              })
            : subCities.subCity.map((subCity, index) => {
                return (
                  <section
                    key={index}
                    className=" d-flex justify-content-space-between"
                    onClick={() => {
                      setSelectedCity(
                        JSON.stringify({
                          city: subCities.city,
                          subCity: subCity,
                        })
                      );

                      setIsOpenDialog(false);
                    }}
                  >
                    <Typography variant="body1 font-weight-bold">
                      {subCity}
                    </Typography>

                    <ArrowBackIosNew fontSize="small" />
                  </section>
                );
              })}
        </div>
      );
    };
    return (
      <Dialog open={open}>
        <div id="DialogBox">
          <DialogTitleBox />
          <div className="divider"></div>
          {subCities.city !== "init" ? (
            <span
              onClick={() => {
                seSubCities((draft) => {
                  return {
                    city: "init",
                    subCity: ["init"],
                  };
                });
              }}
              className="cur-pointer"
            >
              باز گشت به انتخاب شهر
            </span>
          ) : (
            "مکان یاب خودکار"
          )}
          <CitiesBox />
        </div>
      </Dialog>
    );
  };
  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <RootContainer>
            <ContainerRowOne>
              <LogoBox>
                <Link to={"/"}>
                  <Logo src={"/images/logo.svg"} />
                </Link>
              </LogoBox>
              <SearchBox>
                <SearchBox label="جستجو" variant="filled" />
                <Search />
              </SearchBox>
              <ActionButtonBox>
                <ActionButton />
              </ActionButtonBox>
            </ContainerRowOne>
            
            <ContainerRowTwo className={`mb-3 ${useScrollTrigger({
              threshold:200
            })? "d-none" : ""}`}>
              <ListBox>
                <EachItemListBox
                  onMouseEnter={() => setOpenMenu(true)}
                  onMouseLeave={() => setOpenMenu(false)}
                >
                  <StartButton>دسته بندی کالا ها</StartButton>
                  {openMenuItems && <MenuItems />}
                </EachItemListBox>
                <EachItemListBox>
                  <MainButtons />
                </EachItemListBox>
              </ListBox>
              <EndListBox>
                <EndButtons
                  setIsOpenDialog={() => setIsOpenDialog(true)}
                  selectedCity={selectedCity}
                />
                <CitiesDialog open={isOpenDialog} />
              </EndListBox>
            </ContainerRowTwo>
            
          </RootContainer>
        </Toolbar>
      </AppBar>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
