import { PrimaryButton } from "@/ui/buttons";
import { Subtitle, Title } from "@/ui/typography";
import { createOrder } from "@/lib/api";
import { useRouter } from "next/router";
import { useGetLocalStorageData, useLoader } from "@/lib/hooks";
import { Loader } from "@/ui/loaders";
import {
  ItemBox,
  ItemImg,
  ItemImgContainer,
  ItemInformationContainer,
} from "./styled";

export function ItemComponent({ data }: any) {
  const itemData = data.singleProduct;
  const router = useRouter();
  const auth_token = useGetLocalStorageData("user_information");
  const { loader, showLoader } = useLoader();

  async function redirectToPayment() {
    if (auth_token) {
      showLoader();
      const order = await createOrder(itemData.objectID);
      router.push(order.url);
    } else {
      window.alert("Por favor, inicie sesión para realizar la compra");
      router.push("/signin");
    }
  }

  return (
    <ItemBox gap="30px">
      <ItemImgContainer>
        <ItemImg src={itemData.Image} />
      </ItemImgContainer>
      <ItemInformationContainer gap="30px">
        <Subtitle style={{ placeSelf: "start" }}>{itemData.title}</Subtitle>
        <Title style={{ placeSelf: "start" }}>${itemData.price}</Title>
        <div style={{ width: "100%" }}>
          <PrimaryButton callback={redirectToPayment} text="Comprar" />
          <div style={{ marginBottom: 30 }}></div>
          <Loader visible={loader} />
        </div>
      </ItemInformationContainer>
    </ItemBox>
  );
}
