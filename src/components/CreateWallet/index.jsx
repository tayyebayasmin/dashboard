import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  Slider,
  TextField,
  useTheme,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { tokens } from "../../themes";
import DialogTitle from "@mui/material/DialogTitle";
import CustomText from "../CustomText/CustomText";
import { Close } from "@mui/icons-material";
export default function CreateWallet({ open, handleClose }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [num, setnum] = React.useState("xxxxxxxxxxxxx");
  const [name, setname] = React.useState("");
  const [display, setDisplayMore] = React.useState(false);
  const onChangenum = (event) => {
    setnum(event.target.value);
  };

  const onChangename = (event) => {
    setname(event.target.value);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            width: "700px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "white",
            borderRadius: "20px",
            paddingBottom: "25px",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingRight: "20px",
          }}
        >
          <Box></Box>
          <DialogTitle
            id="alert-dialog-title"
            fontSize={25}
            ml={5}
            color={theme.palette.mode === "light" ? "#28094A" : "white"}
          >
            {"Create Wallet"}
          </DialogTitle>
          <IconButton style={{ marginTop: "10px" }} onClick={handleClose}>
            <Close
              sx={{
                color: theme.palette.mode === "light" ? "#28094A" : "white",
              }}
            />
          </IconButton>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            mt: "2%",
            alignSelf: "center",
          }}
        >
          {!display ? (
            <>
              <CustomText text={"Wallet Name"} size={18} mt={"12px"} />

              <TextField
                id="outlined-basic"
                variant="outlined"
                type={"text"}
                sx={{
                  backgroundColor: "#4A3067",
                  marginLeft: "10px",
                  color: "white !important",
                }}
                placeholder={"Name Your Wallet"}
                value={name}
                onChange={onChangename}
              />
              <CustomText text={"Your Wallet Address"} size={18} mt={"12px"} />
              <TextField
                id="outlined-basic"
                variant="outlined"
                type={"text"}
                sx={{
                  backgroundColor: "#4A3067",
                  marginLeft: "10px",
                  color: "white !important",
                }}
                placeholder={"xxxxxxxxxxxxxxxxxxx"}
                value={num}
                onChange={onChangenum}
              />
            </>
          ) : (
            <>
              <CustomText text={"Enter Your Password"} size={16} mt={"12px"} />
              <TextField
                id="outlined-basic"
                variant="outlined"
                type={"text"}
                sx={{
                  backgroundColor: "#4A3067",
                  marginLeft: "10px",
                  color: "white !important",
                }}
                placeholder={"Enter your current password"}
                value={name}
                onChange={onChangename}
              />
              <Box mt="3%">
                <CustomText text={"Lost your password?"} size={16} />
                <text style={{ color: "#8FFF4A" }}> Click here!</text>
              </Box>
            </>
          )}
          <Button
            sx={{
              width: "140px",
              ml: "10px",
              marginTop: "20px",
              background: "#F85844",
              borderRadius: "20px",
              alignSelf: "center",
            }}
            variant="contained"
            onClick={() => {
              !display ? setDisplayMore(true) : handleClose();
            }}
          >
            submit
          </Button>
        </Box>
      </Dialog>
    </div>
  );
}
