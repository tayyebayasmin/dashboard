import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/golbal/Topbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import HelpPage from "./scenes/help";
import FundsPage from "./scenes/funds"
import RewardsPage from './scenes/rewards'
import RulesPage from "./scenes/rules"
import ProjectPage from "./scenes/projects"
import HistoryPage from "./scenes/history"
import ProSidebar from "./scenes/golbal/Sidebar";
import WalletsPage from './scenes/wallets'
import OverviewPage from './scenes/overview'
import KDAAccountPage from "./scenes/kdaAccount";
import PayoutsHistoryPage from "./scenes/payoutsHistory";
import ActivityHistoryPage from "./scenes/activityHistory";
import SecurityPage from "./scenes/Security";
import DevicesPage from "./scenes/devices";
import AccessProfilesPage from "./scenes/accessProfiles";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <div className="app">
        <ProSidebar />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main className="content">
            <Topbar />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/projects" element={<ProjectPage />} />
              <Route exact path="/help" element={<HelpPage />} />
              <Route exact path="/rules" element={<RulesPage />} />
              <Route exact path="/rewards" element={<RewardsPage />} />
              <Route exact path="/funds" element={<FundsPage />} />
              <Route exact path="/funds/overview" element={<OverviewPage />} />
              <Route exact path="/funds/kdaaccount" element={<KDAAccountPage />} />
              <Route exact path="/history" element={<HistoryPage />} />
              <Route exact path="/wallets" element={<WalletsPage />} />
              <Route exact path="/payoutshistory" element={<PayoutsHistoryPage />} />
              <Route exact path="/activityhistory" element={<ActivityHistoryPage />} />
              <Route exact path="/security" element={<SecurityPage />} />
              <Route exact path="/devices" element={<DevicesPage />} />
              <Route exact path="/accessProfiles" element={<AccessProfilesPage />} />

            </Routes>
          </main>
        </ThemeProvider>
      </div>
    </ColorModeContext.Provider>
  );
}

export default App;
