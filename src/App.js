import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Context
import GlobalContext from "./Context/Context";

// Main Pages - Lazy loaded
const HomeNew = lazy(() => import("./Pages/HomeNew"));
const CaseStudy = lazy(() => import("./Pages/CaseStudy"));
const Privacy = lazy(() => import("./Pages/Privacy"));

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      import("./Functions/Utilities").then((module) => {
        if (module.setDocumentFullHeight) {
          module.setDocumentFullHeight();
        }
      });
    }, 1000);
  }, [location]);

  // Get the current location and set the window to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setFooterHeight(0);
  }, [location]);

  return (
    <GlobalContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
        isModalOpen: false,
        setIsModalOpen: () => {},
        customModal: { el: null, isOpen: false },
        setCustomModal: () => {},
      }}
    >
      <div className="App" style={{ "--header-height": `${headerHeight}px` }}>
        <main style={{ marginTop: 0, marginBottom: footerHeight }}>
          <AnimatePresence mode="wait">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <Routes>
                {/* Home - Single Page Portfolio */}
                <Route
                  path="/"
                  element={<HomeNew style={{ "--base-color": "#0891b2" }} />}
                />

                {/* Case Study Pages */}
                <Route
                  path="/project/:slug"
                  element={<CaseStudy style={{ "--base-color": "#0891b2" }} />}
                />

                {/* Privacy */}
                <Route
                  path="/privacy"
                  element={<Privacy style={{ "--base-color": "#0891b2" }} />}
                />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
