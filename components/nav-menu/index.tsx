import { NextLink } from "@/ui/typography";
import { NavMenuContainer, Nav } from "./styled";
import { SignOut } from "@/ui/sign-out";

type NavMenuProps = {
  isLogged: boolean;
  user: string;
  isOpen: "opened" | "closed";
};

export function NavMenu({ isLogged, user, isOpen }: NavMenuProps) {
  const sign = isLogged ? "Cerrar sesión" : null;
  const redirectToLogin = isLogged ? "/profile" : "/signin";

  return (
    <NavMenuContainer className={isOpen}>
      <NextLink path="/signin">
        <Nav>Ingresar</Nav>
      </NextLink>
      <NextLink path={redirectToLogin}>
        <Nav>Mi perfil</Nav>
      </NextLink>
      <NextLink path="/search?q=">
        <Nav>Buscar</Nav>
      </NextLink>
      <SignOut sign={sign} user={user} />
    </NavMenuContainer>
  );
}
