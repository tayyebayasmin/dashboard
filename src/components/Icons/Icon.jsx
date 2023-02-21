import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import CustomText from "../CustomText/CustomText";

const Icons = ({ text, p, pt, pl = "0px", source,marginText='20px' }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return theme.palette.mode === "dark" ? (
    <Box
      display="flex"
      flexDirection={"row"}
      mr={'30px'}
      sx={{
        alignItems: "center",
        border: "2px solid white",
        borderRadius: "100px",
        width: "30px",
        height: "30px",
        padding: "2px",
      }}
    >
      <img style={{ paddingLeft: pl }} src={`../../assets/${source}.png`} />
      <CustomText ml={marginText} text={text} />
    </Box>
  ) : (
    <Box
    display={'flex'}
    flexDirection={'row'}
    alignItems='center'>
    <Box
      sx={{
        border: "2px solid #28094A",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100px",
        width: "30px",
        height: "30px",
        padding: "2px",
      }}
    >
      <img
        style={{ paddingLeft: p, marginTop: pt }}
        src={`../../assets/${source}.png`}
      />
    </Box>
    <CustomText ml="18px" text={text} />
    </Box>
  );
};
export default Icons;
