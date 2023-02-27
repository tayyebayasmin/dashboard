import React from "react";
import { useTheme, Box, Switch, Button } from "@mui/material";
import { tokens } from "../../themes";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import WithDrawModal from "../../components/WithDrawModal";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { mockDataWithdraw } from "../../data/mockData";
import Header from "../../components/Header/Header";
import { useState } from "react";

const WithdrawRewardsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [withdraw, setWithdraw] = useState(true);
  const handleClose = () => setWithdraw(false);
  return (
    <Box ml="3%" mr="3%" mt="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Rewards" />
      </Box>
      <TableContainer
        component={Paper}
        style={{
          backgroundColor: theme.palette.mode === "dark" ? "#28094A" : "white",
        }}
      >
        <Table aria-label="simple table">
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
                Name
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Reward Amount
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
            {mockDataWithdraw.map((row) => (
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
                  {row.name}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  ${row.amount}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  <Button
                    sx={{
                      width: "45%",
                      ml: "10px",
                      color: "white",
                      marginTop: "20px",
                      background: "#F85844",
                      borderRadius: "20px",
                    }}
                    onClick={() => setWithdraw(true)}
                  >
                    Withdraw
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {withdraw && <WithDrawModal open={withdraw} handleClose={handleClose} />}
    </Box>
  );
};
export default WithdrawRewardsPage;
