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
export default function AddNewAccount({ open, handleClose }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [name, setname] = React.useState();

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
          <DialogTitle
            id="alert-dialog-title"
            fontSize={25}
            ml={5}
            color={theme.palette.mode === "light" ? "#28094A" : "white"}
          >
            {"Add New Account"}
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
            mt: "4%",
            alignSelf: "center",
          }}
        >
          <CustomText text={"Account Name"} size={18} />
          <TextField
            id="outlined-basic"
            variant="outlined"
            type={"text"}
            sx={{
              backgroundColor:
                theme.palette.mode === "dark" ? "#4A3067" : "white",
              marginLeft: "10px",
            }}
            placeholder={"Name Your Account"}
            value={name}
            onChange={onChangename}
          />
          <Button
            sx={{
              width: "140px",
              ml: "10px",
              marginTop: "6%",
              background: "#F85844",
              borderRadius: "20px",
              alignSelf: "center",
            }}
            variant="contained"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Box>
      </Dialog>
    </div>
  );
}
