import React, { useState } from "react";
import { useTheme, Box, Switch, Button, TablePagination } from "@mui/material";
import { tokens } from "../../themes";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {  mockDataKda } from "../../data/mockData";
import Header from "../../components/Header/Header";
import CustomText from "../../components/CustomText/CustomText";
const KDAAccountPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box ml="80px" mr="80px" mt="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="KDA Account" />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
      >
        <Box
          display={"flex"}
          sx={{
            minWidth: "350px",
            borderRadius: "12px",
            padding: "12px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
          <CustomText text={"Account Balance"} size={"20px"} />
          <CustomText size={"30px"} text={"0.0000000 KDA"} />
          <CustomText size={"20px"} text={"= 0 USD"} />
        </Box>
        <Box
          display={"flex"}
          sx={{
            minWidth: "350px",
            borderRadius: "12px",
            padding: "12px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
          <CustomText text={"Next Payout"} size={"20px"} />
          <CustomText size={"30px"} text={"---"} />
          <CustomText size={"20px"} text={"Payout rule not set"} />
        </Box>
        <Box
          display={"flex"}
          sx={{
            minWidth: "350px",
            borderRadius: "12px",
            padding: "12px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
          <CustomText text={"Total Income"} size={"20px"} />
          <CustomText size={"30px"} text={"0.0000000 KDA"} />
          <CustomText size={"20px"} text={"= 0 USD"} />
        </Box>
      </Box>
      <Box
          display={"flex"}
          sx={{
            borderRadius: "12px",
            padding: "12px",
            marginTop:"12px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
          <CustomText text={"Payout Settings"} size={"20px"} />
          <img
          style={{marginLeft:'5px'}}
          width={'40px'}
          src="../../assets/wallet.png"
          />
          <CustomText size={"18px"} text={"you have no payout settings."} />
          <CustomText size={"15px"} text={"We recommnd you set up payouts to recieve your rewards regularly."} />
          <Button
            sx={{
              width:'200px',
              ml: "10px",
              marginTop:'20px',
              background: "#F85844",
              borderRadius: "20px",
            }}
            variant="contained"
          >
           Set Up Payout Rule
          </Button>
        </Box>
        <Box
          display={"flex"}
          sx={{
            height:'230px',
            borderRadius: "12px",
            padding: "12px",
            marginTop:"12px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
        <TableContainer
        component={Paper}
        style={{
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
                Date
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Type
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
               Detail
              </TableCell>
              <TableCell
                  align="right"
                  style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockDataKda.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.date}
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.type}
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.detail}
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </Box>
  );
};
export default KDAAccountPage;
