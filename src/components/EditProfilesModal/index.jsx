import * as React from "react";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { tokens } from "../../themes";
import DialogTitle from "@mui/material/DialogTitle";
import CustomText from "../CustomText/CustomText";
import {
  CheckOutlined,
  Close,
  KeyboardArrowRight,
  ReadMoreOutlined,
} from "@mui/icons-material";
import { useState } from "react";
export default function EditProfileModal({ open, handleClose }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [check1, setCheck1] = useState(true);

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
            {"Edit Access Profile"}
          </DialogTitle>
          <IconButton style={{ marginTop: "10px" }} onClick={handleClose}>
            <Close
              sx={{
                color: theme.palette.mode === "light" ? "#28094A" : "white",
              }}
            />
          </IconButton>
        </div>
        <Box paddingLeft={"3%"} paddingRight={"3%"}>
          <Box>
            <IconButton onClick={() => setCheck1(!check1)}>
              <Box
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light" ? "#4A3067" : "white",
                  width: "20px",
                  borderRadius: "4px",
                  height: "20px",
                }}
              >
                {check1 && (
                  <CheckOutlined
                    sx={{
                      color:
                        theme.palette.mode === "dark" ? "#4A3067" : "white",
                    }}
                  />
                )}
              </Box>
            </IconButton>
            <CustomText text={"Allow access to web APIs"} />
          </Box>
          <Box marginX="8%">
            <CustomText
              ml="0px"
              text={`You will be able to use a token authentication in your scripts or
3rd party appllications.`}
            />
          </Box>
          <Box mt={"4%"}>
            <CustomText text={"Meta"} size="20px" />
          </Box>
          <Box>
            <CustomText text={`Created at:`} />
            <CustomText text={"28-01-2023"} />
          </Box>
          <Box>
            <CustomText text={`Last Update:`} />
            <CustomText text={"31-01-2023"} />
          </Box>
          <Box>
            <CustomText text={`Last usage:`} />
            <CustomText text={"30-01-2023"} />
          </Box>
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
                color: theme.palette.mode==='dark'?"white":'#361956',
                marginTop: "20px",
                borderRadius: "20px",
                alignSelf: "center",
                borderColor:"white !important"
              }}
              variant="outlined"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              sx={{
                width:"28%",
                ml: "10px",
                marginTop: "20px",
                background: "#F85844",
                borderRadius: "20px",
                alignSelf: "center",
              }}
              variant="contained"
              onClick={handleClose}
            >
              Edit Access Profile
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
