import React from "react";
import { useTheme, Box, Switch, Button } from "@mui/material";
import { tokens } from "../../themes";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { mockDataFunds, mockDataProject } from "../../data/mockData";
import Header from "../../components/Header/Header";
import { DataGrid } from "@mui/x-data-grid";
import CustomText from "../../components/CustomText/CustomText";
const FundsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box ml="80px" mr="80px" mt="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Financial Account" />
        <Box>
        <Button
          sx={{
            paddingInline: "20px",
            background: "#F85844",
            borderRadius: "20px",
          }}
          variant="contained"
        >
          Pause All Payouts 
        </Button>
        <Button
          sx={{
            ml:'10px',
            paddingInline: "20px",
            background: "#C78FB7",
            borderRadius: "20px",
          }}
          variant="contained"
        >
          Add new Account 
        </Button>
      </Box>
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
                Account
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Currency
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Fiat Equivalent
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Available Balance
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Payout Role
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Next Payout ETA
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockDataFunds.map((row) => (
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
                  {row.account}
                </TableCell>
                <TableCell
                  align="left"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.currency}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.equivalent}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.balance}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.rule}
                  <button
                    style={{
                      color: "#8FFF4A",
                      backgroundColor: "transparent",
                      border: 0,
                    }}
                  >
                    Connect Wallet
                  </button>
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.PayoutETA}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default FundsPage;
