import { Burger } from "../burger";
import { WhiteLogo } from "@/ui/logo";
import { NavMenu } from "../nav-menu";
import { useState } from "react";
import { HeaderButton } from "@/ui/buttons";
import { useRouter } from "next/router";
import { useHideSearchBar, useIsLogged } from "@/lib/hooks";
import Link from "next/link";
import { SignOutDesktop } from "@/ui/sign-out";
import { SearchForm } from "../forms";
import {
  Container,
  MobileSearchBarContianer,
  StyledHeader,
  DesktopSearchBarContainer,
  HeaderContainer,
} from "./styled";

export function Header() {
  const [navMenuStatus, setNavMenuStatus]: any = useState("");
  const router = useRouter();
  const userInformation: any = useIsLogged();
  const isLogged = userInformation ? true : false;
  const buttonDisplay = isLogged ? "none" : "initial";
  const logOutDisplay = isLogged ? "flex" : "none";
  const { searchBarStatus, updateSearchBarStatus } = useHideSearchBar();

  function goSignInPage() {
    router.push("/signin");
  }

  function toggleMenu() {
    navMenuStatus === "opened"
      ? setNavMenuStatus("closed")
      : setNavMenuStatus("opened");
    updateSearchBarStatus(!searchBarStatus);
  }

  return (
    <StyledHeader>
      <HeaderContainer>
        <Container>
          <Link href={"/"}>
            <WhiteLogo></WhiteLogo>
          </Link>
          <DesktopSearchBarContainer>
            <SearchForm visible={searchBarStatus} />
          </DesktopSearchBarContainer>

          <Burger handleClick={toggleMenu} />

          <HeaderButton
            text="Ingresar"
            callback={goSignInPage}
            display={buttonDisplay}
          />
          <SignOutDesktop
            sign="Cerrar sesión"
            user={userInformation.email}
            display={logOutDisplay}
          ></SignOutDesktop>
        </Container>
        <MobileSearchBarContianer>
          <SearchForm visible={searchBarStatus} />
        </MobileSearchBarContianer>
      </HeaderContainer>

      <NavMenu
        isLogged={isLogged}
        user={userInformation.email}
        isOpen={navMenuStatus}
      />
    </StyledHeader>
  );
}
