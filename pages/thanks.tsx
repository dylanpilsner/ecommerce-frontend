import { Layout } from "@/components/layout";
import { ColumnDirectionBox } from "@/ui/box";
import { Subtitle, Title } from "@/ui/typography";
import Head from "next/head";

export default function ThankYouPage() {
  return (
    <Layout>
      <Head>
        <title>Detalle de compra</title>
      </Head>
      <ColumnDirectionBox style={{ padding: "100px 10px" }}>
        <Title style={{ margin: "100px 0", textAlign: "center" }}>
          Muchas gracias por elegirnos!
        </Title>
        <Subtitle style={{ textAlign: "center" }}>
          Te haremos saber cuando se despache tu pedido :)
        </Subtitle>
      </ColumnDirectionBox>
    </Layout>
  );
}
