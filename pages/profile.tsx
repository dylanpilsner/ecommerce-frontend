import { Layout } from "@/components/layout";
import { ProfileComponent } from "@/components/profile-component";
import Head from "next/head";

export default function ProfilePage() {
  return (
    <Layout>
      <Head>
        <title>Perfil</title>
      </Head>
      <ProfileComponent />
    </Layout>
  );
}
