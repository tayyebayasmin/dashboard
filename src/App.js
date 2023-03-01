import { ColorModeContext, useMode } from "./themes";
import { Box, Button, CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/golbal/Topbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import HelpPage from "./scenes/help";
import FundsPage from "./scenes/funds";
import RewardsPage from "./scenes/rewards";
import RulesPage from "./scenes/rules";
import ProjectPage from "./scenes/projects";
import HistoryPage from "./scenes/history";
import ProSidebar from "./scenes/golbal/Sidebar";
import WalletsPage from "./scenes/wallets";
import OverviewPage from "./scenes/overview";
import KDAAccountPage from "./scenes/kdaAccount";
import PayoutsHistoryPage from "./scenes/payoutsHistory";
import ActivityHistoryPage from "./scenes/activityHistory";
import SecurityPage from "./scenes/Security";
import DevicesPage from "./scenes/devices";
import AccessProfilesPage from "./scenes/accessProfiles";
import WithdrawRewardsPage from "./scenes/withdrawRewards";
import { ArrowRightRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Menu from "@mui/icons-material/Menu";
import Footer from "./components/Footer";

function App() {
  const [theme, colorMode] = useMode();
  const [compressed, setCompressed] = useState(true);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <div className="app">
        {windowDimenion.winWidth < 800 && !compressed && <ProSidebar setClose={setCompressed} close={compressed}/>}
        {windowDimenion.winWidth > 800 && (
          <ProSidebar compressed={compressed} />
        )}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main className="content">
            {windowDimenion.winWidth < 800 && (
              <Button
                sx={{
                  position: "absolute",
                  right: 0,
                }}
                onClick={() => setCompressed(!compressed)}
              >
                <Menu
                  fontSize="large"
                  sx={{
                    minWidth: "100px",
                    color: theme.palette.mode === "dark" ? "white" : "#361956",
                  }}
                />
              </Button>
            )}
            <Box mt={windowDimenion.winWidth < 800 ? "4%" : undefined}>
              <Topbar compressed={compressed} windowDimenion={windowDimenion.winWidth} />
            </Box>
            <Routes>
              <Route
                exact
                path="/"
                element={<Dashboard windowDimenion={windowDimenion} />}
              />
              <Route exact path="/projects" element={<ProjectPage />} />
              <Route
                exact
                path="/help"
                element={<HelpPage windowDimenion={windowDimenion} />}
              />
              <Route exact path="/rules" element={<RulesPage />} />
              <Route
                exact
                path="/rewards"
                element={<RewardsPage windowDimenion={windowDimenion} />}
              />
              <Route exact path="/funds" element={<FundsPage />} />
              <Route exact path="/funds/overview" element={<OverviewPage />} />
              <Route
                exact
                path="/funds/kdaaccount"
                element={<KDAAccountPage windowDimenion={windowDimenion} />}
              />
              <Route
                exact
                path="/history"
                element={<HistoryPage windowDimenion={windowDimenion} />}
              />
              <Route exact path="/wallets" element={<WalletsPage />} />
              <Route
                exact
                path="/payoutshistory"
                element={<PayoutsHistoryPage />}
              />
              <Route
                exact
                path="/activityhistory"
                element={<ActivityHistoryPage />}
              />
              <Route
                exact
                path="/security"
                element={<SecurityPage windowDimenion={windowDimenion} />}
              />
              <Route
                exact
                path="/devices"
                element={<DevicesPage windowDimenion={windowDimenion} />}
              />
              <Route
                exact
                path="/accessProfiles"
                element={<AccessProfilesPage windowDimenion={windowDimenion}/>}
              />
              <Route
                exact
                path="/withdrawrewards"
                element={<WithdrawRewardsPage />}
              />
            </Routes>
          {compressed&&
            <Footer/>}
          </main>
        </ThemeProvider>
      </div>
    </ColorModeContext.Provider>
  );
}

export default App;
