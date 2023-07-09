import { Layout } from "@/components/layout";
import { fetchApi, getProductById } from "@/lib/api";
import { ItemComponent } from "@/components/item-components";

export default function ItemPage({ data }: any) {
  return (
    <Layout>
      <ItemComponent data={data} />
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context: any) {
  const data = await getProductById(context.params.itemId);

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
}
