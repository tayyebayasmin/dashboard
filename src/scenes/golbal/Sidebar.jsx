import { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { tokens } from "../../themes";
import { Dashboard, ExpandMore, LiveHelpRounded, MilitaryTechOutlined } from "@mui/icons-material";
const Item = ({ title, to, icon, selected, setSelected, rightIcon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? "#28094A" : "white",
        backgroundColor: selected === title ? "#ffffff" : undefined,
        "&:hover": {
          color: "red",
        },
      }}
      onClick={() => setSelected(title)}
      icon={
        title === "Projects" && selected === "Projects" ? (
          <img width={"22px"} src={`../../assets/DarkProject.png`} />
        ) : (
          icon
        )
      }
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};
const ItemFunds = ({
  title,
  to,
  OnPressIcon,
  selected,
  setSelected,
  rightIcon,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log("funds", title);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? "#28094A" : "white",
        backgroundColor: selected === title ? "#ffffff" : undefined,
      }}
      onClick={() => {
        setSelected(title);
        if (title === "Financial Account") {
          OnPressIcon();
        }
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="space-between"
        flexDiretion="row"
      >
        <Typography>{title}</Typography>
        {rightIcon}
      </Box>
    </MenuItem>
  );
};
const ProSidebar = ({compressed}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  const [selectedFunds, setSelectedFunds] = useState("Financial Account");
  const [selected, setSelected] = useState("Dashboard");
  const [isCollapse, setCollapse] = useState(false);
  const [selectedHistory, setSelectedHistory] = useState("Rewards History");
  const [selectedReward, setSelecteReward] = useState("Account");
  return (
    <Sidebar
      backgroundColor="#28094A"
      style={{
        zIndex:!compressed?10:undefined,
        position:!compressed?'absolute':undefined,
        top:0,
        bottom:0,
        minHeight:'100vh',
      }}
    >
      
      <Menu
        iconShape="square"
        menuItemStyles={{
          button: ({ level}) => {
            if (level === 0) {
              return {
                "&:hover": {
                  color: "#28094A !important",
                },
              };
            }
          },
        }}
      >
        <Box mb="50px">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Link to={"/"}>
              <img
                alt="logo"
                width="100px"
                height="100px"
                src={`../../assets/logo.png`}
              />
            </Link>
          </Box>
        </Box>
        {(location.pathname == "/" ||
          location.pathname == "/projects" ||
          location.pathname == "/help" ||
          location.pathname == "/withdrawrewards") && (
          <Box>
            <Link to={"/"}>
              <Item
                title="Dashboard"
                icon={<Dashboard />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>

            <Link to={"/projects"}>
              <Item
                title="Projects"
                icon={<img width={"22px"} src={`../../assets/Project.png`} />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            <Link to="help">
              <Item
                title="Help"
                icon={<LiveHelpRounded />}
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
            {/* <Link to="/rules"> */}
            <Item
              title="Rules"
              icon={<img width={"22px"} src={`../../assets/Rules.png`} />}
              // selected={selected}
              // setSelected={setSelected}
            />
            {/* </Link> */}
            <Link to="/rewards">
              <Item
                title="Rewards"
                icon={<MilitaryTechOutlined/> }
                selected={selected}
                setSelected={setSelected}
              />
            </Link>
          </Box>
        )}
        {(location.pathname == "/rewards" ||
          location.pathname == "/security" ||
          location.pathname == "/devices" ||
          location.pathname == "/accessProfiles") && (
          <Box>
            <Link to={"/rewards"}>
              <Item
                OnPressIcon={() => setCollapse(!isCollapse)}
                title="Account"
                selected={selectedReward}
                setSelected={setSelecteReward}
              />
            </Link>
            <Link to={"/security"}>
              <Item
                title="Security"
                selected={selectedReward}
                setSelected={setSelecteReward}
              />
            </Link>
            <Link to={"/devices"}>
              <Item
                title="Devices"
                selected={selectedReward}
                setSelected={setSelecteReward}
              />
            </Link>
            <Link to={"/accessProfiles"}>
              <Item
                title="Access Profiles"
                selected={selectedReward}
                setSelected={setSelecteReward}
              />
            </Link>
          </Box>
        )}
        {(location.pathname == "/funds" ||
          location.pathname == "/funds/overview" ||
          location.pathname == "/funds/kdaaccount" ||
          location.pathname == "/wallets") && (
          <Box>
            <Link to={"/funds"}>
              <ItemFunds
                OnPressIcon={() => setCollapse(!isCollapse)}
                title="Financial Account"
                rightIcon={<ExpandMore />}
                selected={selectedFunds}
                setSelected={setSelectedFunds}
              />
            </Link>
            {isCollapse && (
              <>
                <Link to={"/funds/overview"}>
                  <ItemFunds
                    title="Overview"
                    selected={selectedFunds}
                    setSelected={setSelectedFunds}
                  />
                </Link>
                <Link to={"/funds/kdaaccount"}>
                  <ItemFunds
                    title="KDA Account"
                    selected={selectedFunds}
                    setSelected={setSelectedFunds}
                  />
                </Link>
              </>
            )}
            <Link to={"/wallets"}>
              <ItemFunds
                title="Wallets"
                selected={selectedFunds}
                setSelected={setSelectedFunds}
              />
            </Link>
          </Box>
        )}
        {(location.pathname == "/history" ||
          location.pathname == "/payoutshistory" ||
          location.pathname == "/activityhistory") && (
          <Box>
            <Link to={"/history"}>
              <Item
                OnPressIcon={() => setCollapse(!isCollapse)}
                title="Rewards History"
                selected={selectedHistory}
                setSelected={setSelectedHistory}
              />
            </Link>
            <Link to={"/payoutshistory"}>
              <Item
                title="Payouts History"
                selected={selectedHistory}
                setSelected={setSelectedHistory}
              />
            </Link>
            <Link to={"/activityhistory"}>
              <Item
                title="Activity History"
                selected={selectedHistory}
                setSelected={setSelectedHistory}
              />
            </Link>
          </Box>
        )}
      </Menu>
    </Sidebar>
  );
};

export default ProSidebar;
