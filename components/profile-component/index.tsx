import { useEffect } from "react";
import { ProfileForm } from "../forms";
import { useRouter } from "next/router";
import { useIsLogged } from "@/lib/hooks";

export function ProfileComponent() {
  const router = useRouter();
  const isLogged = useIsLogged();

  useEffect(() => {
    if (!isLogged) {
      router.push("/signin");
    }
  }, []);

  return <ProfileForm />;
}
