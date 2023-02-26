import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import CustomText from "../CustomText/CustomText";

const Header = ({ Title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])
  return (
    <Box mb="30px">
      <CustomText text={Title}
      size={windowDimenion.winWidth<450?"18px":"25px"}
      />
    </Box>
  );
};
export default Header;
