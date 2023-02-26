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
import close from "./close.png";
import vector from "./Vector.png";
import { mockDataFunds, mockDataProject } from "../../data/mockData";
import Header from "../../components/Header/Header";
import CustomText from "../../components/CustomText/CustomText";
import PauseAllPauouts from "../../components/PausePayoutModal";
import AddNewAccount from "../../components/AddNewAccount";
import { useState } from "react";
import CommonButton from "../../components/ButtonCommon";
const OverviewPage = () => {
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
        <Header Title="Overview" />
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
                align="center"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Next Payout ETA
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Action
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
                    paddingTop: "30px",
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
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  <MaterialUISwitch />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default OverviewPage;
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 45,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      width: 80,
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${close})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#F66856",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "white",
    width: 28,
    height: 25,
    marginTop: 9,
    padding: 3,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 4,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${vector})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#2C9F30",
    borderRadius: 25,
  },
}));
