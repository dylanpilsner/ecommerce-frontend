import { Layout } from "@/components/layout";
import { SearchComponent } from "@/components/search-component";
import Head from "next/head";

export default function SearchPage() {
  return (
    <Layout>
      <Head>
        <title>Buscar</title>
      </Head>
      <SearchComponent />
    </Layout>
  );
}
