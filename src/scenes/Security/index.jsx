import React from "react";
import { useTheme, Box, TextField, Button } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header/Header";
import CustomText from "../../components/CustomText/CustomText";
import { useState } from "react";
import { Lock } from "@mui/icons-material";
import LogoutModal from "../../components/LogoutModal";
import OTPModal from "../../components/OTP";
const SecurityPage = ({ windowDimenion }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [pwd, setPwd] = useState("xxxxxx");
  const [logout, Setisslogout] = useState(false);
  const handleCloseLogout = () => {
    Setisslogout(false);
  };
  const [OTP, SetIssOTP] = useState(false);
  const handleCloseOTP = () => {
    SetIssOTP(false);
  };
  const onChangepsw = (event) => {
    setPwd(event.target.value);
  };
  return (
    <Box m="20px" mb='60px'>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Security" />
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: "15px",
          flexDirection: "column",
          width: windowDimenion.winWidth < 450 ? undefined : 400,
        }}
      >
        <CustomText
          text={"Change Password"}
          size={20}
          mb={windowDimenion.winWidth < 450 ? 2 : 8}
        />
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
        <CustomText text={"Two Factor Authorization"} size={20} mb={2} />
        <CustomText
          text={
            "We highly recommend using 2FA. You can choose from two options below."
          }
          size={15}
          mb={2}
        />
        <Box
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "#4A3067" : "white",
            display: "flex",
            flexDirection: "column",
            borderRadius: "8px",
            width: windowDimenion.winWidth < 450 ? "100%" : "75%",
            padding: "30px",
          }}
        >
          <CustomText text={"One Time Password (OTP)"} size={18} mb={2} />
          <Box
            sx={{
              display: "flex",
              flexDirection: windowDimenion.winWidth<450?'column':"row",
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
                marginLeft:windowDimenion.winWidth<450? undefined: "100px",
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
            onClick={() => SetIssOTP(true)}
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
            width: windowDimenion.winWidth < 450 ? "100%" : "75%",
            padding: "30px",
            marginTop: "10px",
          }}
        >
          <CustomText
            text={"Universal Second Factor (FIDO)"}
            size={18}
            mb={2}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: windowDimenion.winWidth<450?'column':"row",
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
                width: windowDimenion.winWidth < 450 ? "100%" : "75%",
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
            onClick={() => SetIssOTP(true)}
          >
            Enable OTP
          </Button>
        </Box>
        {OTP && <OTPModal open={OTP} handleClose={handleCloseOTP} />}
        <CustomText size={"19px"} text={"Active User Sessions"} mt={"20px"} />
        <CustomText
          size={"15px"}
          text={`Logout all your active sessions - including the one you are using right now.`}
        />
        <Button
          sx={{
            width: "160px",
            ml: "10px",
            marginTop: "20px",
            background: "#F85844",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
          variant="contained"
          onClick={() => Setisslogout(true)}
        >
          Logout all sessions!
        </Button>
      </Box>
      {logout && <LogoutModal open={logout} handleClose={handleCloseLogout} />}
    </Box>
  );
};
export default SecurityPage;
