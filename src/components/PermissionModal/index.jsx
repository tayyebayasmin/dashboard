import * as React from "react";
import { IconButton, useTheme } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { mockDataPermission } from "../../data/mockData";
import { Check, Clear, Edit } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import { tokens } from "../../themes";
import DialogTitle from "@mui/material/DialogTitle";
import { Close } from "@mui/icons-material";

export default function PermissionModal({ open, handleClose }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            maxWidth:'60%',
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
            fontSize={25}
            ml={5}
            color={theme.palette.mode === "light" ? "#28094A" : "white"}
          >
            {"Permission Overview"}
          </DialogTitle>
          <IconButton style={{ marginTop: "10px" }} onClick={handleClose}>
            <Close
              sx={{
                color: theme.palette.mode === "light" ? "#28094A" : "white",
              }}
            />
          </IconButton>
        </div>
        <TableContainer
          component={Paper}
          style={{
            width: "90%",
            alignSelf:'center',
            marginTop: "2%",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "white",
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
                  Proiles Name
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  Master Account
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  Full
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  Read-only
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  Limited read-only
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockDataPermission.map((row) => (
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
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    style={{
                      color:
                        theme.palette.mode === "light" ? "#361956" : "white",
                    }}
                  >
                    {row.MasterAccount ? <Check /> : <Clear />}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      color:
                        theme.palette.mode === "light" ? "#361956" : "white",
                    }}
                  >
                    {row.Full ? <Check /> : <Clear />}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      color:
                        theme.palette.mode === "light" ? "#361956" : "white",
                    }}
                  >
                    {row.ReadOnly ? <Check /> : <Clear />}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      color:
                        theme.palette.mode === "light" ? "#361956" : "white",
                    }}
                  >
                    {row.LimitedReadOnly ? <Check /> : <Clear />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Dialog>
    </div>
  );
}
