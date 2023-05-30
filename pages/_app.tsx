import "@/app/globals.css";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import theme from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
