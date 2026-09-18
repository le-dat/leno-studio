import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Loader from "./components/Loader";
import { SmoothScrollProvider } from "./components/SmoothScrollContext";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Marquee from "./sections/Marquee";
import NewArrival from "./sections/NewArrival";
import Shop from "./sections/Shop";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";

import { siteMetadata } from "./data/portfolioData";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Sync document metadata
    if (siteMetadata.title) {
      document.title = siteMetadata.title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && siteMetadata.description) {
      metaDesc.setAttribute("content", siteMetadata.description);
    }
    // Wait for fonts to be ready and allow intro animation to finish smoothly
    if (document.fonts) {
      document.fonts.ready.then(() => {
        const timer = setTimeout(() => {
          setLoaded(true);
        }, 2200);
        return () => clearTimeout(timer);
      });
    } else {
      const timer = setTimeout(() => {
        setLoaded(true);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <AnimatePresence mode="wait">
        {!loaded && <Loader key="loader" />}
      </AnimatePresence>

      <SmoothScrollProvider>
        <main className="App">
          <Home />
          <About />
          <Shop />
          <Marquee />
          <NewArrival />
          <Footer />
        </main>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}

export default App;
