import { useLogOut } from "@/lib/hooks";
import {
  SignOutContainer,
  SignOutContainerDesktop,
  StyledSignOut,
  User,
} from "./styled";
import { useRouter } from "next/router";

type SignOut = {
  sign: string | null;
  user: string;
};

export function SignOut({ sign, user }: SignOut) {
  const setLogOut = useLogOut();

  function logOut() {
    setLogOut(true);
  }

  return (
    <SignOutContainer>
      <User style={{ display: user ? "initial" : "none" }}>{user}</User>
      <StyledSignOut onClick={logOut}>{sign}</StyledSignOut>
    </SignOutContainer>
  );
}

type SignOutDesktop = {
  sign: string | null;
  user: string;
  display: "flex" | "none";
};

export function SignOutDesktop({ sign, user, display }: SignOutDesktop) {
  const setLogOut = useLogOut();
  const router = useRouter();

  function logOut() {
    setLogOut(true);
  }

  function goToProfile() {
    router.push("/profile");
  }

  return (
    <SignOutContainerDesktop display={display}>
      <User
        onClick={goToProfile}
        style={{ display: user ? "initial" : "none" }}
      >
        {user}
      </User>
      <StyledSignOut onClick={logOut}>{sign}</StyledSignOut>
    </SignOutContainerDesktop>
  );
}
