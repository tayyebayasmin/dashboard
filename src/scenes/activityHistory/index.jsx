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
import { mockDataActivityHistory } from "../../data/mockData";
import Header from "../../components/Header/Header";

const ActivityHistoryPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Activity History" />
      </Box>
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
                IP Address
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Activity
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Detail
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockDataActivityHistory.map((row) => (
              <TableRow
                key={row.Date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.Date}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.IpAddress}
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.Activity}
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.details}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default ActivityHistoryPage;
