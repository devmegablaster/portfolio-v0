import "../styles/globals.css";
import dynamic from "next/dynamic";
import Head from "next/head";
import CursorAnimation from "../components/CursorAnimation";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>DEVMEGABLASTER</title>
            </Head>
            <CursorAnimation />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
