import React from "react";
import { useTheme, Box } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header/Header";
const RulesPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Rules" />
      </Box>

    </Box>
  );
};
export default RulesPage;
