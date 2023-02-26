import React, { useState } from "react";
import { useTheme, Box, Button, IconButton } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header/Header";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomText from "../../components/CustomText/CustomText";
import { mockDataProfiles } from "../../data/mockData";
import { Check, Clear, Edit } from "@mui/icons-material";
import EditProfileModal from "../../components/EditProfilesModal";
import { Link } from "react-router-dom";
import CreateNewProfile from "../../components/CreateNewProfile";
import PermissionModal from "../../components/PermissionModal";
const AccessProfilesPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [EditModal, setEditModal] = useState(false);
  const handleClose = () => setEditModal(false);
  const [newProfile, setNewProfile] = useState(false);
  const CloseNewProfileModal = () => setNewProfile(false);
  const [permission, setPermission] = useState(false);
  const ClosePermissionModal = () => setPermission(false);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Access Profiles" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "8px",
        }}
      >
        <CustomText
          text={
            "You can set up multiple access profiles with different passwords (or API tokens) and different levels of permissions."
          }
        />
        <CustomText
          text={
            "This way, it is possible to share limited access to your user account without compromising its security."
          }
        />
        <CustomText
          text={
            "Access profiles can be flexibly (de)activated or changed at any time by the master account."
          }
        />
        <Button
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
          onClick={() => setPermission(true)}
        >
          <CustomText
            mt={"12px"}
            text={"Click here for permissions overview"}
          />
        </Button>
      </Box>
      {permission && (
        <PermissionModal open={permission} handleClose={ClosePermissionModal} />
      )}
      <TableContainer
        component={Paper}
        style={{
          width: "90%",
          marginLeft: "3%",
          marginTop: "2%",
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
                Profile Name
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Username
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Web Access
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Api Access
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Access Permissions
              </TableCell>
              <TableCell
                align="center"
                style={{
                  color: theme.palette.mode === "light" ? "#361956" : "white",
                }}
              >
                Status
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
            {mockDataProfiles.map((row) => (
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
                  {row.username}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.webAccess ? <Check /> : <Clear />}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.apiAccess ? <Check /> : <Clear />}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.accessPermissions}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  {row.state}
                </TableCell>
                <TableCell
                  align="center"
                  style={{
                    color: theme.palette.mode === "light" ? "#361956" : "white",
                  }}
                >
                  <IconButton onClick={() => setEditModal(true)}>
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {EditModal && (
        <EditProfileModal open={EditModal} handleClose={handleClose} />
      )}
      <Button
        sx={{
          width: "150px",
          ml: "3%",
          marginTop: "30px",
          background: "#F85844",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
        variant="contained"
        onClick={() => setNewProfile(true)}
      >
        Create New
      </Button>
      {newProfile && (
        <CreateNewProfile
          open={newProfile}
          handleClose={CloseNewProfileModal}
        />
      )}
    </Box>
  );
};
export default AccessProfilesPage;
