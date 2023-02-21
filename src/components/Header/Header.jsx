import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../themes";
import CustomText from "../CustomText/CustomText";

const Header = ({ Title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <CustomText text={Title}
      size="25px"
      />
    </Box>
  );
};
export default Header;
