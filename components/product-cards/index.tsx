import { ProductCardsContainer } from "./styled";
import { ProductCard } from "@/ui/cards";

type ProductArray = {
  data: any[];
  margin?: string;
};

export function ProductCards({ data, margin }: ProductArray) {
  return (
    <ProductCardsContainer style={{ margin }}>
      {data.map((i): any => {
        return (
          <ProductCard
            image={i.Image}
            title={i.title}
            price={i.price}
            id={i.objectID}
            key={i.id}
          />
        );
      })}
    </ProductCardsContainer>
  );
}
