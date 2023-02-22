import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../themes";

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
  return (
    <text
      style={{
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
    </text>
  );
};
export default CustomText;
