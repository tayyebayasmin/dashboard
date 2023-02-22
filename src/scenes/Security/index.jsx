import React from "react";
import { useTheme, Box, TextField, Button } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header/Header";
import CustomText from "../../components/CustomText/CustomText";
import { useState } from "react";
import { Lock } from "@mui/icons-material";
const SecurityPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [pwd, setPwd] = useState("xxxxxx");

  const onChangepsw = (event) => {
    setPwd(event.target.value);
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Security" />
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "15px",
          flexDirection: "column",
          width: "400px",
        }}
      >
        <CustomText text={"Change Password"} size={20} mb={8} />
        <CustomText text={"New Password"} size={18} />
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{
            backgroundColor: "#4A3067",
            marginLeft: "10px",
          }}
          value={pwd}
          onChange={onChangepsw}
        />
        <CustomText text={"Confirm Password"} size={18} mt={"12px"} />
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{
            backgroundColor: "#4A3067",
            marginLeft: "10px",
          }}
          value={pwd}
          onChange={onChangepsw}
        />
        <Button
          sx={{
            width: "140px",
            ml: "10px",
            marginTop: "20px",
            background: "#F85844",
            borderRadius: "20px",
          }}
          variant="contained"
        >
          Change Password
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "15px",
          flexDirection: "column",
          marginTop: "15px",
        }}
      >
        <CustomText text={"Two Factor Authorization"} size={20} mb={8} />
        <CustomText
          text={
            "We highly recommend using 2FA. You can choose from two options below."
          }
          size={15}
          mb={8}
        />
        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "#4A3067" : "white",
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            width: "900px",
            padding: "30px",
          }}
        >
          <CustomText text={"One Time Password (OTP)"} size={18} mb={8} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CustomText
              text={`OTP is a time-dependent code to be used for a single confirmation attempt. You can use Google
 Authenticator or other similar apps of your choice to generate the codes for you.`}
            />
            <Box
              sx={{
                display: "flex",
                marginLeft: "100px",
                alignItems: "center",
              }}
            >
              <Lock sx={{ color: "#28094A" }} />
              <CustomText text={"Disabled"} />
            </Box>
          </Box>
          <Button
          sx={{
            width: "140px",
            ml: "10px",
            marginTop: "20px",
            background: "#F85844",
            borderRadius: "20px",
          }}
          variant="contained"
        >
          Enable OTP
        </Button>
        </Box>
        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "#4A3067" : "white",
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            width: "900px",
            padding: "30px",
            marginTop:'10px'
          }}
        >
          <CustomText text={"Universal Second Factor (FIDO)"} size={18} mb={8} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CustomText
              text={`Physical device following the FIDO Universal 2nd Factor standard. You can use multiple devices
              like TREZOR or Ubikey to add another level of security.`}
            />
            <Box
              sx={{
                display: "flex",
                marginLeft: "100px",
                alignItems: "center",
              }}
            >
              <Lock sx={{ color: "#28094A" }} />
              <CustomText text={"Disabled"} />
            </Box>
          </Box>
          <Button
          sx={{
            width: "140px",
            ml: "10px",
            marginTop: "20px",
            background: "#F85844",
            borderRadius: "20px",
          }}
          variant="contained"
        >
          Enable OTP
        </Button>
        </Box>
        <CustomText size={'19px'}  text={'Active User Sessions'} mt={'20px'}/>
        <CustomText size={'15px'} text={`Logout all your active sessions - including the one you are using right now.`}/>
        <Button
          sx={{
            width: "160px",
            ml: "10px",
            marginTop: "20px",
            background: "#F85844",
            borderRadius: "20px",
            marginBottom:'20px'
          }}
          variant="contained"
        >
          Logout all sessions!
        </Button>
      </Box>
    </Box>
  );
};
export default SecurityPage;
