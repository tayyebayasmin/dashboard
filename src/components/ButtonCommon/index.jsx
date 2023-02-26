import React, { useEffect, useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";

const CommonButton = ({
  text,
  background,
  onClickButton,
  containerStyle,
  variant = "contained",
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
    <button
      style={{
        marginLeft:'2px',
        fontSize:windowDimenion.winWidth< 450&&'10px',
        color:'white',
        paddingInline:windowDimenion.winWidth< 450 ?'10px':'20px',
        borderRadius:windowDimenion.winWidth< 450?'5px':'20px',
        border:0,
        padding:'5px',
        background: background,
      }}
      onClick={onClickButton}
    >
      {text}
    </button>
  );
};
export default CommonButton;
