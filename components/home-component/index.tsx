import { ProductCards } from "../product-cards";
import { SearchSectionContainer } from "./styled";
import { Subtitle, Title } from "@/ui/typography";
import { Input } from "@/ui/text-field";
import { ColumnBoxForm, ColumnDirectionBox } from "@/ui/box";
import { PrimaryButton } from "@/ui/buttons";
import { useRouter } from "next/router";

type ProductArray = {
  data: any[];
};

export function HomeComponent({ data }: ProductArray) {
  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();
    const target = e.target;
    const value = target.product.value;

    router.push(`search?q=${value}&limit=3&offset=0`);
  }

  return (
    <ColumnDirectionBox>
      <SearchSectionContainer>
        <Title style={{ textAlign: "center", marginBottom: 30 }}>
          El mejor <br />
          e-commerce
        </Title>
        <ColumnBoxForm gap={"15px"} width="300px" onSubmit={handleSubmit}>
          <Input placeholder="Encontrá tu producto ideal" name="product" />
          <PrimaryButton text="Buscar" />
        </ColumnBoxForm>
      </SearchSectionContainer>
      <ColumnDirectionBox style={{ backgroundColor: "var(--grey-100" }}>
        <Subtitle style={{ marginTop: 70, textAlign: "center", width: "50%" }}>
          Productos destacados
        </Subtitle>
        <ProductCards data={data} margin="100px 0" />
      </ColumnDirectionBox>
    </ColumnDirectionBox>
  );
}
