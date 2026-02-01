import { Route, Routes } from "react-router-dom";
// import TopBar from "./components/topBar/TopBar";
import { Box } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { Toaster, ToastBar } from "react-hot-toast";
import { useResponsiveScreens } from "./components/mediaQuery/useResponsiveScreens";
import ResponsiveAppBar from "@components/topBar/ResponsiveAppBar";

// const AuthRoutes = lazy(() => import("./routes/AuthRoutes"));
// const ProtectedRoutes = lazy(() => import("./routes/ProtectedRoutes"));
const UnprotectedRoutes = lazy(() => import("./routes/UnprotectedRoutes"));

interface AppProps {
  toggleTheme: () => void;
}

const App: React.FC<AppProps> = ({ toggleTheme }) => {
  const { isSmScreen } = useResponsiveScreens();

  return (
    <Box sx={{}}>
      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {/* {t.type !== "loading" && <button onClick={() => toast.dismiss(t.id)}>X</button>} */}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>

      <Box sx={{ overflow: "auto", height: isSmScreen ? "93vh" : "100vh" }}>
        {/* <TopBar toggleTheme={toggleTheme} /> */}
        <ResponsiveAppBar />
        <Box sx={{ p: 1, px: 2 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/*" element={<UnprotectedRoutes />} />
              {/* <Route path="/user/*">
                <Route path="auth/*" element={<AuthRoutes />} />
                <Route path="*" element={<ProtectedRoutes />} />
              </Route> */}
            </Routes>
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
