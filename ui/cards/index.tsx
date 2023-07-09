import { useRouter } from "next/router";
import { RegularLarge, Subtitle } from "../typography";
import {
  ImgContainer,
  ProductCardContainer,
  CardImg,
  ProductDataContainer,
} from "./styled";

type Product = {
  image: string;
  title: string;
  price: number;
  id: string;
};

export function ProductCard({ image, title, price, id }: Product) {
  const router = useRouter();

  function goToItem() {
    router.push(`/item/${id}`);
  }

  return (
    <ProductCardContainer onClick={goToItem}>
      <ImgContainer>
        <CardImg src={image} />
      </ImgContainer>
      <ProductDataContainer>
        <RegularLarge
          style={{
            width: 142,
            wordWrap: "break-word",
          }}
        >
          {title}
        </RegularLarge>

        <Subtitle>${price}</Subtitle>
      </ProductDataContainer>
    </ProductCardContainer>
  );
}
