import * as React from "react";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { tokens } from "../../themes";
import DialogTitle from "@mui/material/DialogTitle";
import CustomText from "../CustomText/CustomText";
import {
  Close,
  KeyboardArrowRight,
  ReadMoreOutlined,
} from "@mui/icons-material";
export default function DeleteAccountModal({email,username,open, handleClose }) {
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
            {"Request Account Deletion"}
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
            paddingInline: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CustomText
            text={`If you do not want to use our service anymore, you can delete your account.`}
          />
          <CustomText
            text={`This action is final and your account cannot be reactivated in the future.`}
          />
          <CustomText
            mt="3%"
            text={`Make sure to request your final payout before confirming the deletion request.
            Otherwise, any remaining balances are considered a generous donation to the
            pool.`}
          />
          <CustomText
            mt="3%"
            text={`To complete account deletion, you will need to click on a confirmation link we
            will send to you promptly via your email.`}
          />
          <CustomText
            mt="4%"
            text={`Please make sure that this account is the one that you want to delete.`}
          />
          <CustomText text={`Email: ${email}`} />
          <CustomText text={`Username: ${username}`} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
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
                borderColor: "white !important",
              }}
              variant="outlined"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              sx={{
                width: "35%",
                ml: "10px",
                marginTop: "20px",
                background: "#F85844",
                borderRadius: "20px",
                alignSelf: "center",
              }}
              variant="contained"
              onClick={handleClose}
            >
              Request Account Deletion
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
