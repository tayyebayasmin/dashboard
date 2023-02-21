import * as React from "react";
import { IconButton, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { tokens } from "../../themes";
import DialogTitle from "@mui/material/DialogTitle";
import CustomText from "../CustomText/CustomText";
import {
  Close,
  KeyboardArrowRight,
  ReadMoreOutlined,
} from "@mui/icons-material";
export default function AlertDialog({open, handleClose }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
            fontSize={30}
            color={theme.palette.mode === "light" ? "#28094A" : "white"}
          >
            {"About Kadena"}
          </DialogTitle>
          <IconButton style={{ marginTop: "10px" }}
          onClick={handleClose}>
            <Close
              sx={{
                color: theme.palette.mode === "light" ? "#28094A" : "white",
              }}
            />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "12px",
            paddingInline: "20px",
            justifyContent: "space-between",
          }}
        >
          <CustomText text="Rank" />
          <CustomText text="No. 128" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingInline: "20px",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <CustomText text="Market Cap" />
          <CustomText text="$260,678,160" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "10px",
            paddingInline: "20px",
            justifyContent: "space-between",
          }}
        >
          <CustomText text="Circulation Supply" />
          <CustomText text="217,125,596" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingInline: "20px",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <CustomText text="Max Supply" />
          <CustomText text="1,000,000,000" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingInline: "20px",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <CustomText text="Total Supply" />
          <CustomText text="1,000,000,000" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingInline: "20px",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <CustomText text="View on CoinMarketCap" />
          <KeyboardArrowRight
            sx={{
              color: theme.palette.mode === "light" ? "#28094A" : "white",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingInline: "20px",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <CustomText text="Explorer" />
          <ReadMoreOutlined
            sx={{
              color: theme.palette.mode === "light" ? "#28094A" : "white",
            }}
          />
        </div>
        <div
          style={{
            paddingInline: "20px",
            paddingTop: "10px",
          }}
        >
          <CustomText size="20px" text={"Introduction"} />
        </div>
        <div
          style={{
            paddingInline: "30px",
          }}
        >
          <CustomText
            size="18px"
            text={
              "Kadena is a Proof-of-Work (PoW) blockchain. Kadena utilizes a smart contract language called “Pact”, a secure smart contract language built-in automated auditing. KDA is its native utility token designed to be."
            }
          />
        </div>
      </Dialog>
    </div>
  );
}
