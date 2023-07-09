import { Footer } from "../footer";
import { Header } from "../header";

export function Layout({ children }: any) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
