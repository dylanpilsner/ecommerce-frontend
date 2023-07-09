import { Subtitle } from "@/ui/typography";
import { LoginForm } from "../forms";
import { ColumnDirectionBox } from "@/ui/box";
import { useIsLogged } from "@/lib/hooks";
import { useEffect } from "react";
import { useRouter } from "next/router";

export function SignIn() {
  const isLogged = useIsLogged();
  const router = useRouter();
  useEffect(() => {
    if (isLogged) {
      router.push("/");
    }
  }, [isLogged]);

  return (
    <ColumnDirectionBox style={{ margin: "50px 0", height: 350 }}>
      <Subtitle
        style={{
          textAlign: "center",
          width: "100%",
          marginBottom: 20,
        }}
      >
        Ingresar
      </Subtitle>
      <LoginForm />
    </ColumnDirectionBox>
  );
}
