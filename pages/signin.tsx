import { Layout } from "@/components/layout";
import { SignIn } from "@/components/sign-component";
import Head from "next/head";

export default function SignInPage() {
  return (
    <Layout>
      <Head>
        <title>Iniciar sesión</title>
      </Head>
      <SignIn />
    </Layout>
  );
}
