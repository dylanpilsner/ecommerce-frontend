import { ProductCards } from "../product-cards";
import { RegularBody } from "@/ui/typography";
import { useSearchProducts } from "@/lib/hooks";
import { useRouter } from "next/router";
import { ColumnDirectionBox } from "@/ui/box";
import { SeeMore } from "./styled";
import { Loader } from "@/ui/loaders";

export function SearchComponent() {
  const { data, isLoading } = useSearchProducts();
  const router = useRouter();
  const paginationData = data?.pagination || {};
  const limit = paginationData.limit;
  const total = paginationData.total;
  const realLimit = limit <= total ? limit : total;
  const products = data?.results || [];
  const seeMoreDisplay = realLimit === total ? "none" : "inherit";

  //Función para agregar 3 productos más al límite.

  function seeMore() {
    const currentLimit = parseInt(router.query.limit as any) || 3;
    const newLimit = currentLimit + 3;
    const query = { ...router.query, limit: newLimit };
    router.push({ pathname: router.pathname, query });
  }

  return (
    <div>
      <ColumnDirectionBox style={{ width: "100%", padding: "50px 0" }}>
        <RegularBody style={{ placeSelf: "start", margin: "0 0 20px 60px" }}>
          {realLimit} resultados de {total}
        </RegularBody>
        <Loader visible={isLoading} />
        <ProductCards data={products} margin="10px 0 30px" />
        <SeeMore onClick={seeMore} style={{ display: seeMoreDisplay }}>
          Ver más
        </SeeMore>
      </ColumnDirectionBox>
    </div>
  );
}
