import { Github, Linkedin } from "@/ui/icons";
import { WhiteRegularBody } from "./styled";
import { RowDirectionBox } from "@/ui/box";
import { NextLink } from "@/ui/typography";
import {
  FooterContainer,
  NavigationBox,
  StyledFooter,
  WhiteRegularLarge,
} from "./styled";
import { useIsLogged } from "@/lib/hooks";

export function Footer() {
  const isLogged = useIsLogged();

  const redirectToLogin = isLogged ? "/profile" : "/signin";

  return (
    <StyledFooter>
      <FooterContainer>
        <NavigationBox gap="30px" width="70px">
          <NextLink path="/signin">
            <WhiteRegularBody>Ingresar</WhiteRegularBody>
          </NextLink>
          <NextLink path={redirectToLogin}>
            <WhiteRegularBody>Mi perfil</WhiteRegularBody>
          </NextLink>
          <NextLink path="/search">
            <WhiteRegularBody>Buscar</WhiteRegularBody>
          </NextLink>
        </NavigationBox>
        <div style={{ margin: "40px 0" }}></div>
        <NavigationBox width="100px" gap="30px" style={{ marginTop: 0 }}>
          <WhiteRegularLarge>Redes</WhiteRegularLarge>
          <RowDirectionBox>
            <Linkedin />
            <NextLink
              path="https://www.linkedin.com/in/dylan-pilsner"
              target="_blank"
            >
              <WhiteRegularBody>Linkedin</WhiteRegularBody>
            </NextLink>
          </RowDirectionBox>
          <RowDirectionBox>
            <Github />
            <NextLink path="https://github.com/dylanpilsner" target="_blank">
              <WhiteRegularBody>Github</WhiteRegularBody>
            </NextLink>
          </RowDirectionBox>
        </NavigationBox>
      </FooterContainer>
    </StyledFooter>
  );
}
