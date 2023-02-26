import React, { useState } from "react";
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
import CommonButton from "../../components/ButtonCommon";
import { mockDataFunds, mockDataProject } from "../../data/mockData";
import Header from "../../components/Header/Header";
import PauseAllPauouts from "../../components/PausePayoutModal";
import AddNewAccount from "../../components/AddNewAccount";
const FundsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isPause, setIsPause] = useState(false);
  const handleClose = () => {
    setIsPause(false);
  };
  const [account, setAccount] = useState(false);
  const handleCloseAccount = () => {
    setAccount(false);
  };
  return (
    <Box ml="3%" mr="3%" mt="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Financial Account" />
        <Box>
          {isPause && (
            <PauseAllPauouts open={isPause} handleClose={handleClose} />
          )}
          {account && (
            <AddNewAccount open={account} handleClose={handleCloseAccount} />
          )}
          <CommonButton
            background={"#F85844"}
            text={"Pause All Payouts "}
            onClickButton={() => {
              setIsPause(true);
            }}
          />
          <CommonButton
            background={"#C78FB7"}
            text={"Add new Account"}
            onClickButton={() => {
              setAccount(true);
            }}
          />
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
