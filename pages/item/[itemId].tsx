import { Layout } from "@/components/layout";
import { getProductById } from "@/lib/api";
import { ItemComponent } from "@/components/item-components";
import Head from "next/head";

export default function ItemPage({ data }: any) {
  const userData = data.singleProduct;

  return (
    <Layout>
      <Head>
        <title>{userData.title}</title>
      </Head>
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
