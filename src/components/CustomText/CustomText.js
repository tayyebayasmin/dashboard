import React from "react";
import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import { useState } from "react";
import { useEffect } from "react";

const CustomText = ({
  justify,
  text,
  size = "16px",
  ml = "10px",
  mr = "0px",
  mb="0px",
  mt="0px",
  weight,
}) => {
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
    <Typography
      sx={{
        fontWeight: weight,
        fontSize: size,
        fontFamily: "Lato",
        marginLeft: ml,
        marginBottom:mb,
        marginRight: mr,
        marginTop:mt,
        textAlign: "justify",
        color: theme.palette.mode === "dark" ? "white" : "#361956",
      }}
    >
      {text}
    </Typography>
  );
};
export default CustomText;
