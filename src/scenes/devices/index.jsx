import React, { useState } from "react";
import { useTheme, Box, TextField, Button } from "@mui/material";
import { tokens } from "../../themes";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { mockDataDevices, mockDataKda } from "../../data/mockData";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../../components/Header/Header";
import CustomText from "../../components/CustomText/CustomText";
import { AdUnits, MobileOffOutlined } from "@mui/icons-material";
const DevicesPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [device, setdevice] = useState("Place your device label");
  const onChangedevice = (event) => {
    setdevice(event.target.value);
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Devices" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CustomText
          text={
            "To monitor your user account in our official mobile app, please follow these Steps."
          }
        />
        <CustomText
          text={"1. Download the application: Android, iOS"}
          mt={"10px"}
        />
        <CustomText
          text={
            " 2. Enter device label for later identification / invalidation. "
          }
        />
        <CustomText
          text={
            " 3. Click “Connect” and scan the QR code generated on your device."
          }
        />
      </Box>
      <TableContainer
        component={Paper}
        style={{
          marginTop: "3%",
          marginLeft: "3%",
          width: "70%",
          backgroundColor: theme.palette.mode === "dark" ? "#28094A" : "white",
        }}
      >
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead
            style={{
              backgroundColor:
                theme.palette.mode === "light" ? "#E0E0E0" : "#1B0336",
            }}
          >
            <TableRow>
              <TableCell
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Device Label
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Connected
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Last Used
              </TableCell>
              <TableCell
                align="right"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Unlink
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockDataDevices.length >= 1 &&
              mockDataDevices.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      color:
                        theme.palette.mode === "light" ? "#361956" : "white",
                    }}
                  >
                    {row.date}
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{
                      color:
                        theme.palette.mode === "light" ? "#361956" : "white",
                    }}
                  >
                    {row.type}
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{
                      color:
                        theme.palette.mode === "light" ? "#361956" : "white",
                    }}
                  >
                    {row.detail}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      color:
                        theme.palette.mode === "light" ? "#361956" : "white",
                    }}
                  >
                    {row.amount}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {mockDataDevices == 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "3%",
            marginLeft: "3%",
          }}
        >
          <AdUnits
            sx={{
              fontSize: "400%",
            }}
          />
          <CustomText
            mt={"1%"}
            text={`You haven't connected any mobile device yet`}
          />
          <img width={"20%"} src={"../../assets/line.png"} />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          marginLeft: "15px",
          flexDirection: "column",
          width: "400px",
        }}
      >
        <CustomText mt={'15px'} text={"Add new device"} size={20} mb={8} />
        <CustomText text={"New device"} size={15} />
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{
            backgroundColor: "#4A3067",
            marginLeft: "10px",
          }}
          value={device}
          onChange={onChangedevice}
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
        >
          Connect
        </Button>
      </Box>
    </Box>
  );
};
export default DevicesPage;
