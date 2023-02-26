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
export default function LogoutModal({ open, handleClose }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [num, setnum] = React.useState("xxxxxxxxxxxxx");

  const onChangenum = (event) => {
    setnum(event.target.value);
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
            {"Logout all sessions!"}
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
          paddingX:'12%'
        }}>
        <CustomText
        ml='0px'
          text={
            "Your will be logged-out from this session as well. Are you sure that you want to continue?"
          }
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop:'6%'
          }}
        >
          <Button
            sx={{
              width: "140px",
              ml: "10px",
              color: theme.palette.mode === "dark" ? "white" : "#361956",
              marginTop: "20px",
              borderRadius: "20px",
              alignSelf: "center",
              borderColor:'white !important'
            }}
            variant="outlined"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              width: "40%",
              ml: "10px",
              marginTop: "20px",
              background: "#F85844",
              borderRadius: "20px",
              alignSelf: "center",
            }}
            variant="contained"
            onClick={handleClose}
          >
            Logout all sessions!
          </Button>
        </Box>
        </Box>
      </Dialog>
    </div>
  );
}
