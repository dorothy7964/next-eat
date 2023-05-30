import Footer from "./Footer";
import Header from "./Header";
import Seo from "./Seo";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Seo />
      <Header />
      <div className="contents">{children}</div>
      <Footer />

      <style jsx>{`
        .contents {
          background-color: orange;
          display: flex;
          min-height: calc(100vh - 120px);
        }
      `}</style>
    </>
  );
}
