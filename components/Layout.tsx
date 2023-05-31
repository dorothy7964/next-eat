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
          display: flex;
          min-height: calc(100vh - 9rem);
          justify-content: center;
        }
      `}</style>
    </>
  );
}
