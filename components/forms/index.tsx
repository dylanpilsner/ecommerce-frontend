import { getToken, sendCode, updateUserProfile } from "@/lib/api";
import { ColumnBoxForm } from "@/ui/box";
import { SecondaryButton } from "@/ui/buttons";
import { SearchBarInput, TextField } from "@/ui/text-field";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
  ButtonContainer,
  InputContainer,
  ProfileBox,
  SearchBox,
} from "./styled";
import { useGetProfile, useLoader } from "@/lib/hooks";
import { Loader } from "@/ui/loaders";
import { ErrorMessage } from "@/ui/messages";

//Componente form para el login

export function LoginForm() {
  const [email, setEmail] = useState();
  const router = useRouter();
  const visibleEmailForm = email ? "none" : undefined;
  const visibleCodeForm = email ? undefined : "none";
  const [error, setError] = useState("");
  const { loader, showLoader, hideLoader } = useLoader();

  async function handleSubmit(e: any) {
    e.preventDefault();
    const target = e.target;
    if (!email) {
      setEmail(target.email.value);
      await sendCode(target.email.value);
    } else {
      showLoader();
      const data = await getToken(email, parseInt(target.code.value));
      if (data.token) {
        router.push("/");
      } else {
        setError(data.message);
        hideLoader();
      }
    }
  }

  return (
    <ColumnBoxForm
      width="333px"
      gap="20px"
      onSubmit={handleSubmit}
      style={{ height: 200 }}
    >
      <ErrorMessage text={error} />
      <TextField
        text="Email"
        name="email"
        type="email"
        placeholder="ejemplo@gmail.com"
        display={visibleEmailForm}
      />
      <TextField
        text="Código"
        name="code"
        type="number"
        placeholder="1 2 3 4 5 6"
        display={visibleCodeForm}
      />
      <SecondaryButton text="Continuar" />
      <Loader visible={loader} />
    </ColumnBoxForm>
  );
}

//Componente form para el search
export function SearchForm({ visible }: any) {
  const router = useRouter();
  function searchProduct(e: any) {
    e.preventDefault();
    const target = e.target;
    const value = target.product.value;
    router.push(`/search?q=${value}&limit=3&offset=0`);
    target.product.value = "";
  }

  return (
    <SearchBox visible={visible} onSubmit={searchProduct}>
      <InputContainer>
        <SearchBarInput placeholder="Buscá un producto" name="product" />
      </InputContainer>
      <ButtonContainer>
        <SecondaryButton text="Buscar" />
      </ButtonContainer>
    </SearchBox>
  );
}

//Componente para el profile

export function ProfileForm() {
  const form: any = useRef();
  const userData = useGetProfile();
  const router = useRouter();
  const { loader, showLoader } = useLoader();

  useEffect(() => {
    const formEl = form.current;
    formEl.name.value = userData?.name || "";
    formEl.address.value = userData?.address || "";
    formEl.phone.value = userData?.phoneNumber || "";
  }, [userData]);

  async function updateProfile(e: any) {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const address = target.address.value;
    const phoneNumber = target.phone.value;
    await updateUserProfile(name, address, phoneNumber);
    showLoader();
    router.reload();
  }

  return (
    <ProfileBox
      style={{ padding: "90px 0" }}
      ref={form}
      onSubmit={updateProfile}
    >
      <TextField
        text="Nombre"
        name="name"
        placeholder=""
        type="text"
        required
      />
      <TextField
        text="Dirección"
        name="address"
        placeholder=""
        type="text"
        required
      />
      <TextField
        text="Teléfono"
        name="phone"
        placeholder=""
        type="number"
        required
      />
      <SecondaryButton text="Guardar" />
      <Loader visible={loader} />
    </ProfileBox>
  );
}
