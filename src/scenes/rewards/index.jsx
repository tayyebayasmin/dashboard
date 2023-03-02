import React from "react";
import { useTheme, Box, IconButton, Button, Slider } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header/Header";
import CustomText from "../../components/CustomText/CustomText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { CheckOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DeleteAccountModal from "../../components/DeleteAccountModal";
const RewardsPage = ({windowDimenion}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const username='danish.009'
  const email='danish.009@hotmail.com'
  const [language, setLanguage] = useState(1);
  const [timeZone, setTimeZone] = useState(0);
  const [currency, setCurrency] = useState(1);
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const CloseDeleteModal = () => setDeleteModal(false);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleChangeTime = (event) => {
    setTimeZone(event.target.value);
  };
  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };
  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: "white",
      },
    },
  };

  return (
    <Box m="20px" mb='60px'>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Account" />
      </Box>
      <Box
        sx={{
          display: "flex",
          marginLeft: windowDimenion.winWidth?undefined:"15px",
          flexDirection: "column",
          width: windowDimenion.winWidth < 450 ? undefined : 400,
        }}
      >
        <CustomText text={"Personal Information"} size={20} mb={8} />
        <CustomText text={"Username"} />
        <Box
          sx={{
            backgroundColor: "#4A3067",
            padding: "8px",
            marginLeft: "2%",
            borderRadius: "6px",
            marginBottom: "10px",
          }}
        >
          <CustomText text={username} />
        </Box>
        <CustomText text={"Email"} />
        <Box
          sx={{
            backgroundColor: "#4A3067",
            padding: "8px",
            marginLeft: "2%",
            borderRadius: "6px",
            marginBottom: "15px",
          }}
        >
          <CustomText text={email} />
        </Box>
        <FormControl sx={{ m: 1, minWidth:windowDimenion.winWidth<450?undefined: 120 }}>
          <CustomText mb="15px" text={"Localization"} size={23} />
          <CustomText text={"Preferred Language"} size={18} />
          <CustomText
            text={"Your Preffered language for web and email communication"}
            size={14}
          />
          <Select
            value={language}
            onChange={handleChange}
            MenuProps={MenuProps}
            sx={{ backgroundColor: "#4A3067", marginTop: "10px" }}
          >
            <MenuItem
              value={1}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              English UK
            </MenuItem>
            <MenuItem
              value={2}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              Spanish
            </MenuItem>
            <MenuItem
              value={3}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              French
            </MenuItem>
            <MenuItem
              value={4}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              Arabic
            </MenuItem>
            <MenuItem
              value={5}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              German
            </MenuItem>
            <MenuItem
              value={6}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              Chinese
            </MenuItem>
            <MenuItem
              value={7}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              Portuguese
            </MenuItem>
            <MenuItem
              value={8}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              Polish
            </MenuItem>
          </Select>
          <CustomText text={"Preferred Timezone"} size={18} mt="10px" />
          <Select
            value={timeZone}
            onChange={handleChangeTime}
            sx={{ backgroundColor: "#4A3067", marginTop: "10px" }}
            MenuProps={MenuProps}
          >
            <MenuItem value={0} disabled sx={{ color: "#4A3067" }}>
              <em>Select Timezone</em>
            </MenuItem>
            <MenuItem
              value={1}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              +0000 UTC
            </MenuItem>
            <MenuItem
              value={2}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              +0000 Africa/Abidjan
            </MenuItem>
            <MenuItem
              value={3}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              +0000 Africa/Accra
            </MenuItem>
            <MenuItem
              value={4}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              +0300 Africa/Addis_Ababa
            </MenuItem>
            <MenuItem
              value={5}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              +0100 Africa/Algiers
            </MenuItem>
            <MenuItem
              value={6}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              +0300 Africa/Asmara
            </MenuItem>
            <MenuItem
              value={7}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              +0000 Africa/Bamako
            </MenuItem>
            <MenuItem
              value={8}
              s
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              +0100 Africa/Bangui
            </MenuItem>
          </Select>
          <CustomText text={"Preferred Fiat Currency"} size={18} mt="10px" />
          <CustomText
            text={"Will be displayed in header and summary statistics"}
            size={14}
          />
          <Select
            value={currency}
            onChange={handleChangeCurrency}
            MenuProps={MenuProps}
            sx={{ backgroundColor: "#4A3067", marginTop: "10px" }}
          >
            <MenuItem
              value={1}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              USD
            </MenuItem>
            <MenuItem
              value={2}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              CNY
            </MenuItem>
            <MenuItem
              value={3}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              GBP
            </MenuItem>
            <MenuItem
              value={4}
              sx={{
                backgroundColor: "#4A3067",
                "&:hover": {
                  color: "#4A3067",
                },
              }}
            >
              EUR
            </MenuItem>
          </Select>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <IconButton onClick={() => setCheck1(!check1)}>
              <Box
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light" ? "#4A3067" : "white",
                  width: "20px",
                  borderRadius: "4px",
                  height: "20px",
                }}
              >
                {check1 && (
                  <CheckOutlined
                    sx={{
                      color:
                        theme.palette.mode === "dark" ? "#4A3067" : "white",
                    }}
                  />
                )}
              </Box>
            </IconButton>
            <CustomText text={"Notify me of payouts"} />
          </Box>
          <CustomText
            text={"Send email notifications when the system semd me payments."}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <IconButton onClick={() => setCheck2(!check2)}>
              <Box
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light" ? "#4A3067" : "white",
                  width: "20px",
                  borderRadius: "4px",
                  height: "20px",
                }}
              >
                {check2 && (
                  <CheckOutlined
                    sx={{
                      color:
                        theme.palette.mode === "dark" ? "#4A3067" : "white",
                    }}
                  />
                )}
              </Box>
            </IconButton>
            <CustomText text={"Newsletter"} />
          </Box>
          <CustomText text={"Recieve our newsletter."} />
            <Button
              sx={{
                width: "140px",
                ml: "10px",
                marginTop: "20px",
                background: "#F85844",
                borderRadius: "20px",
              }}
              variant="contained"
            >
              Save Changes
            </Button>
          <Button
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
            onClick={() => setDeleteModal(true)}
          >
            <CustomText
              text={"Request Account Deletion"}
              size={18}
              mt={"20px"}
            />
          </Button>
        </FormControl>
        {deleteModal && <DeleteAccountModal open={deleteModal} handleClose={CloseDeleteModal} username={username} email={email}/>}
      </Box>
    </Box>
  );
};
export default RewardsPage;
