import * as React from "react";
import { Box, Button, IconButton, Slider, TextField, useTheme } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { tokens } from "../../themes";
import DialogTitle from "@mui/material/DialogTitle";
import CustomText from "../CustomText/CustomText";
import {
  Close,
  KeyboardArrowRight,
  ReadMoreOutlined,
} from "@mui/icons-material";
export default function WithDrawModal({ open, handleClose }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [num, setnum] = React.useState("xxxxxxxxxxxxx");

  const onChangenum= (event) => {
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
          <Box></Box>
          <DialogTitle
            id="alert-dialog-title"
            fontSize={25}
            ml={5}
            color={theme.palette.mode === "light" ? "#28094A" : "white"}
          >
            {"Withdraw"}
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
            alignItems: "center",
            alignContent:'center',
            justifyContent: "space-around",
          }}
        >
          <CustomText text={"Min"} mt={'4px'}/>
          <Slider
            aria-label="Always visible"
            defaultValue={65}
            min={0}
            max={200}
            step={5}
            marks
            valueLabelFormat={(value) => `$ ${value}`}
            valueLabelDisplay="on"
            sx={{
              marginTop: "6%",
              width: "75%",
              color: "white",
              "& .MuiSlider-thumb": {
                borderRadius: "5px",
                width: "10%",
                color: "#F95B3D",
              },
            }}
          />
          <CustomText text={"Max"} ml={-4} mt={'4px'}/>
        </Box>
        <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          width:'80%',
          mt:'6%',
          alignSelf:'center'
        }}>
        <CustomText text={"Wallet Number"} size={18} mt={"12px"} />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type={'text'}
          sx={{
            backgroundColor: "#4A3067",
            marginLeft: "10px",
          }}
          placeholder={'xxxxxxxxxxxxxxxxxxx'}
          value={num}
          onChange={onChangenum}
        />
        <Button
          sx={{
            width: "140px",
            ml: "10px",
            marginTop: "20px",
            background: "#F85844",
            borderRadius: "20px",
            alignSelf:'center'
          }}
          variant="contained"
          onClick={handleClose}
        >
        Withdraw
        </Button></Box>
      </Dialog>
    </div>
  );
}
