import * as React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import CustomText from "../CustomText/CustomText";
import {
  Devices,
  LogoutOutlined,
  Person2Outlined,
  Public,
  Security,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function TopDropDown({ setexpand }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        position: "absolute",
        backgroundColor: "#28094A",
        opacity: "0.9",
        padding: "10px",
        right: "1%",
        zIndex:'10',
        top: "5%",
        width: "220px",
        borderRadius: "10px",
      }}
    >
      <Link
        to={"./rewards"}
        style={{ textDecoration: "none" }}
        onClick={() => setexpand(false)}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#4A3067",
            borderRadius: "5px",
            padding: "3px",
          }}
        >
          <Person2Outlined sx={{ color: "white" }} />
          <CustomText text={"Account"} size="18px" />
        </Box>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={"./security"}
        onClick={() => setexpand(false)}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#4A3067",
            borderRadius: "5px",
            padding: "3px",
            marginTop: "4px",
          }}
        >
          <Security sx={{ color: "white" }} />
          <CustomText text={"Security"} size="18px" />
        </Box>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={"./devices"}
        onClick={() => setexpand(false)}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#4A3067",
            borderRadius: "5px",
            padding: "3px",
            paddingLeft: "4px",
            marginTop: "4px",
          }}
        >
          <Devices sx={{ color: "white" }} />
          <CustomText text={"Devices"} size="18px" />
        </Box>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to={"./accessProfiles"}
        onClick={() => setexpand(false)}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#4A3067",
            borderRadius: "5px",
            padding: "3px",
            paddingLeft: "4px",
            marginTop: "4px",
          }}
        >
          <img src={"../../assets/profiles.png"} />
          <CustomText text={"Access Profiles"} size="18px" />
        </Box>
      </Link>
      <img src={"../../assets/Line.png"} />
      <Link style={{ textDecoration: "none" }} onClick={() => setexpand(false)} to={'/'}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#4A3067",
            borderRadius: "5px",
            padding: "3px",
            paddingLeft: "4px",
            marginTop: "4px",
          }}
        >
          <Public sx={{ color: "white" }} />
          <CustomText text={"Public Site"} size="18px" />
        </Box>
      </Link>
      <img src={"../../assets/Line.png"} />
      <Link style={{ textDecoration: "none" }} onClick={() => setexpand(false)} to={'/'}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#4A3067",
            borderRadius: "5px",
            padding: "3px",
            paddingLeft: "4px",
            marginTop: "4px",
          }}
        >
          <LogoutOutlined sx={{ color: "white" }} />
          <CustomText text={"Logout"} size="18px" />
        </Box>
      </Link>
    </Box>
  );
}
