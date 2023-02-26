import * as React from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { tokens } from "../../themes";
import DialogTitle from "@mui/material/DialogTitle";
import CustomText from "../CustomText/CustomText";
import { CheckOutlined, Close } from "@mui/icons-material";
import { useState } from "react";
export default function CreateNewProfile({ open, handleClose }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [check1, setCheck1] = useState(true);
  const [device, setdevice] = useState("Place your device label");
  const onChangedevice = (event) => {
    setdevice(event.target.value);
  };
  const [permission, setPermission] = useState(0);
  const handleChange = (event) => {
    setPermission(event.target.value);
  };
  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: "white",
      },
    },
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
            fontSize={30}
            color={theme.palette.mode === "light" ? "#28094A" : "white"}
          >
            {"Create Access Profile"}
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
            <CustomText text={"Profile is active"} />
          </Box>
          <Box marginX="8%">
            <CustomText
              ml="0px"
              text={`You can deactivate this profile while keeping it’s credentials.`}
            />
          </Box>
          <Box
            ml="5%"
            mt="5%"
            display={"flex"}
            alignSelf={"center"}
            flexDirection={"column"}
          >
            <CustomText text={"Profile Name"} size={17} />
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{
                width: "80%",
                backgroundColor: "#4A3067",
                marginLeft: "10px",
              }}
              value={device}
              onChange={onChangedevice}
            />
            <Select
              value={permission}
              onChange={handleChange}
              MenuProps={MenuProps}
              sx={{width:'80%', ml:'10px',backgroundColor: "#4A3067", marginTop: "10px" }}
            >
              <MenuItem value={0}><em>Access Permission</em></MenuItem>
              <MenuItem
                value={1}
                sx={{
                  backgroundColor: "#4A3067",
                  "&:hover": {
                    color: "#4A3067",
                  },
                }}
              >
                Full Access{" "}
              </MenuItem>
              <MenuItem
                value={2}
                sx={{
                  backgroundColor: "#4A3067",
                  "&:hover": {
                    color: "#4A3067",
                  },
                }}
              >
                Read -Only
              </MenuItem>
              <MenuItem
                value={3}
                sx={{
                  backgroundColor: "#4A3067",
                  "&:hover": {
                    color: "#4A3067",
                  },
                }}
              >
                Limited Read-only
              </MenuItem>
            </Select>
          </Box>
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
              text={`You will be able to use a token authentication in your scripts
              or 3rd-party applications.`}
            />
          </Box>
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
            <CustomText text={"Profile is active"} />
          </Box>

          <Box marginX="8%">
            <CustomText
              ml="0px"
              text={`You will be able to access this profile via our website using
              the credentials below.`}
            />
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
                width: "28%",
                ml: "10px",
                marginTop: "20px",
                background: "#F85844",
                borderRadius: "20px",
                alignSelf: "center",
              }}
              variant="contained"
              onClick={handleClose}
            >
              Create Access Profile
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
