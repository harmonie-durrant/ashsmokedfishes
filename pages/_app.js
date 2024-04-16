//nextjs
import { useRouter } from 'next/router'
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
//styles
import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles"; // ???
import {motion} from 'framer-motion';
//google
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#fff',
        },
    },
});

export default function App({ Component, pageProps, reviews }) {

    const router = useRouter()

    usePageViews()

    return (
        <ThemeProvider theme={theme}>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7893331997065142" crossOrigin="anonymous" />
            <GoogleAnalytics />
            <div className='text-neutral flex justify-center items-center'>
                <div className='w-full max-w-[2175px]'>
                    <NavBar />
                    <motion.div
                        key={router.route}
                        initial="pageInitial"
                        animate="pageAnimate"
                        variants={{
                            pageInitial: {
                                opacity: 0
                            },
                            pageAnimate: {
                                opacity: 1,
                                transition: {
                                    delay: .25
                                }
                            },

                        }}
                    >
                        <Component {...pageProps}/>
                    </motion.div>
                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    )
}
