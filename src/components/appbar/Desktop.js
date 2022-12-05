import { ArrowBackIosNew, Close, MobileFriendly } from "@mui/icons-material";
import { Dialog, DialogTitle, Divider, Typography } from "@mui/material";
import { useContext, useState } from "react";
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
export function Desktop() {
  const { openMenuItems, setOpenMenu, cities, selectedCity, setCelectedCity } =
    useContext(UiContext);
  const [subCities, seSubCities] = useImmer(["init"]);

  const CitiesDialog = (props) => {
    console.log(subCities);
    const { onClose, open } = props;
    const DialogTitleBox = () => {
      return (
        <div id="DialogTitle">
          <Typography variant="body1" className="font-weight-bold ">
            انتخاب شهر
          </Typography>
          <Close className="cur-pointer" />
        </div>
      );
    };
    const CitiesBox = () => {
      return (
        <div id="CitiesBox" className="mt-1rm">
          {subCities[0] === "init"
            ? cities.map((cty, index) => {
                return (
                  <section
                    key={index}
                    className=" d-flex justify-content-space-between"
                    onClick={() => {
                      seSubCities(() => cty.subCities);
                      console.log(cty.subCities);
                    }}
                  >
                    <Typography variant="body1 font-weight-bold">
                      {cty.city}
                    </Typography>

                    <ArrowBackIosNew fontSize="small" />
                  </section>
                );
              })
            : subCities.map((subCity, index) => {
                return (
                  <section
                    key={index}
                    className=" d-flex justify-content-space-between"
                    onClick={() => {
                      seSubCities(() => subCity);
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
          {subCities[0] !== "init" ? (
            <span
              onClick={() => {
                seSubCities(["init"]);
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
      <ContainerRowTwo className="mb-3">
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
          <EndButtons />
          <CitiesDialog open={true} />
        </EndListBox>
      </ContainerRowTwo>
    </RootContainer>
  );
}
