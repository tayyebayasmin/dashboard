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
import { mockDataWallets } from "../../data/mockData";
import Header from "../../components/Header/Header";
import close from "./close.png";
import vector from "./Vector.png";
import CreateWallet from "../../components/CreateWallet";
const WalletsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [createWalletModal, SetCreateWalletModal] = useState(false);
  const handleClose = () => {
    SetCreateWalletModal(false);
  };
  return (
    <Box ml="3%" mr="3%" mt="30px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Wallets" />
        <Button
          sx={{
            ml: "10px",
            paddingInline: "20px",
            background: "#C78FB7",
            borderRadius: "20px",
          }}
          variant="contained"
          onClick={() => SetCreateWalletModal(true)}
        >
          Add new Wallet
        </Button>
      </Box>
      {createWalletModal && (
        <CreateWallet open={createWalletModal} handleClose={handleClose} />
      )}
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
                Wallet Name
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
                Details
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
            {mockDataWallets.map((row) => (
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
                  {row.details}
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
export default WalletsPage;
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
