import Header from "./Header";
import Footer from "./Footer";
import SubscribeForm from "./Newsletter/SubscribeForm";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-[100dvh] grid-rows-[1fr_auto]">
      <Header />
      <main role="main">{children}</main>
      <SubscribeForm />
      <Footer />
    </div>
  );
};

export default PageWrapper;
