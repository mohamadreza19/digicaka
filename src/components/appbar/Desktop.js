import { MobileFriendly } from "@mui/icons-material";
import { useContext } from "react";
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
  const { openMenuItems, setOpenMenu } = useContext(UiContext);

  return (
    <RootContainer>
      <ContainerRowOne>
        <LogoBox>
          <Logo src={"/images/logo.svg"} />
        </LogoBox>
        <SearchBox>
          <SearchBox label="جستجو" variant="filled" />
          <Search />
        </SearchBox>
        <ActionButtonBox>
          <ActionButton />
        </ActionButtonBox>
      </ContainerRowOne>
      <ContainerRowTwo>
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
        </EndListBox>
      </ContainerRowTwo>
    </RootContainer>
  );
}
