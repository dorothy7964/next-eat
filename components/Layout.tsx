import Footer from "./Footer";
import NavBar from "./NavBar";
import Seo from "./Seo";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Seo />
      <NavBar />
      <div className="contents">{children}</div>
      <Footer />

      <style jsx>{`
        .contents {
          background-color: orange;
          display: flex;
          min-height: calc(100vh - 65px);
        }
      `}</style>
    </>
  );
}
