import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { ColorModeContext, tokens } from "../../themes";
import Switch from "@mui/material/Switch";
import { useLocation } from "react-router-dom";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { NotificationsOutlined, WalletTwoTone } from "@mui/icons-material";
import CustomizeButton from "../../components/Button/Button";
import CustomText from "../../components/CustomText/CustomText";
import TopDropDown from "../../components/TopDropDown";
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [isExapnd, setIsExpand] = useState();
  const [isSelected, setIsSelected] = useState("Mining");
  const onPressDropDown = () => {
    setIsExpand(!isExapnd);
  };
  const onPress = (btntext) => {
    setIsSelected(btntext);
  };
  const location = useLocation();
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {location.pathname === "/" ||
      location.pathname == "/funds" ||
      location.pathname == "/funds/overview" ||
      location.pathname == "/funds/kdaaccount" ||
      location.pathname == "/wallets"||
      location.pathname == "/history" ||
      location.pathname == "/payoutshistory" ||
      location.pathname == "/activityhistory"? (
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            height: "35px",
            alignItems: "center",
            border:
              theme.palette.mode === "light"
                ? `1px solid purple`
                : "1px solid white",
            borderRadius: "50px",
            paddingLeft: "10px",
            paddingRight: "10px",
            marginTop: "10px",
          }}
        >
          <Link to={"/"}>
            <CustomizeButton
              text="Mining"
              select={isSelected}
              onPressButton={onPress}
            />
          </Link>
          <Link to={"/funds"}>
            <CustomizeButton
              text="Funds"
              select={isSelected}
              onPressButton={onPress}
            />
          </Link>
          <Link to={"/history"}>
            <CustomizeButton
              text="History"
              select={isSelected}
              onPressButton={onPress}
            />
          </Link>
        </Box>
      ) : (
        <Box></Box>
      )}
      <Box display="flex" alignItems="center">
        <CustomText text="Feedback" />
        <CustomText text="Help" ml="30px" />
        <IconButton
          sx={{
            marginLeft: "30px",
            color: theme.palette.mode === "dark" ? "white" : "#361956",
          }}
        >
          <WalletTwoTone />
          <CustomText ml="4px" text=" 0 USD" />
        </IconButton>
        <MaterialUISwitch sx={{ m: 1 }} onClick={colorMode.toggleColorMode} />
        <IconButton
          sx={{ color: theme.palette.mode === "dark" ? "white" : "#361956" }}
        >
          <NotificationsOutlined />
        </IconButton>
        <IconButton
          onClick={onPressDropDown}
          sx={{ color: theme.palette.mode === "dark" ? "white" : "#361956" }}
        >
          <CustomText ml="12px" mr="3px" text="Danish" />
          <PersonOutlinedIcon />
          {isExapnd ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </Box>
      {isExapnd && <TopDropDown isExapnd={isExapnd} setIsExpand={setIsExpand}/>}
    </Box>
  );
};
export default Topbar;

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      width: 80,
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));
