import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import CustomText from "../CustomText/CustomText";
import {
  FacebookOutlined,
  GitHub,
  Instagram,
  Reddit,
  Telegram,
  Twitter,
  YouTube,
} from "@mui/icons-material";

const Footer = ({ Title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
    <Box
      position={'fixed'}
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"row"}
      sx={{
        paddingY: "5px",
        bottom: '0',
        backgroundColor: "#4A3067",
        width: windowDimenion.winWidth > 1000 ? "83.5%" : "100%",
      }}
    >
      <Box>
        <CustomText
          text={"Powered by SHARINGMINERS"}
          size={windowDimenion.winWidth < 450 && "8px"}
        />
      </Box>
      <Box>
        <IconButton>
          <FacebookOutlined
            fontSize={windowDimenion.winWidth < 450 ? "small" : undefined}
          />
        </IconButton>
        <IconButton>
          <Instagram
            fontSize={windowDimenion.winWidth < 450 ? "small" : undefined}
          />
        </IconButton>
        <IconButton>
          <Twitter
            fontSize={windowDimenion.winWidth < 450 ? "small" : undefined}
          />
        </IconButton>
        <IconButton>
          <Telegram
            fontSize={windowDimenion.winWidth < 450 ? "small" :undefined}
          />
        </IconButton>
        <IconButton>
          <YouTube
            fontSize={windowDimenion.winWidth < 450 ? "small" : undefined}
          />
        </IconButton>
        <IconButton>
          <GitHub
            fontSize={windowDimenion.winWidth < 450 ? "small" :undefined}
          />
        </IconButton>
        <IconButton>
          <Reddit
            fontSize={windowDimenion.winWidth < 450 ? "small" : undefined}
          />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Footer;
