import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../themes";

const CustomizeButton = ({text,select,onPressButton}) => {
  const theme= useTheme()
  const colors = tokens(theme.palette.mode);
  return(
    <button
    style={{
      fontSize:"16px",
      fontFamily:"Lato",
      marginLeft:"5px",
      height:"25px",
      borderRadius:"15px",
      paddingLeft:"12px",
      paddingRight:"12px",
      borderStyle:'none',
      color:(theme.palette.mode==='dark' && select==text)?'#361956':(theme.palette.mode==='light')?'#361956':'white',
      backgroundColor:text==select?'#BDAEAE':'transparent',
      
    }}
    onClick={()=>onPressButton(text)}>
      {text}
    </button>
  );
};
export default CustomizeButton;
