import React from "react";
import { useTheme, Box, IconButton, Button, TextField } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header/Header";
import CustomText from "../../components/CustomText/CustomText";
import BarChart from "../../components/BarChart/BarChart";

const HistoryPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="History" />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
      >
        <Box
          display={"flex"}
          sx={{
            minWidth: "400px",
            borderRadius: "12px",
            padding: "12px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
          <CustomText text={"Unconfirmed Rewards"} size={20} />
          <CustomText text={"0.00000000 KDA"} size={18} />
          <CustomText text={"= 0 USD"} />
        </Box>
        <Box
          display={"flex"}
          sx={{
            minWidth: "400px",
            borderRadius: "12px",
            padding: "12px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
          <CustomText text={"Yesterday's Reward (27-01-2023)"} size={20} />
          <CustomText text={"0.00000000 KDA"} size={18} />
          <CustomText text={"= 0 USD"} />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            minWidth: "400px",
            borderRadius: "12px",
            padding: "12px",
            paddingTop: "20px",
            paddingBottom: "20px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ paddingInline: "12px" }}
          >
            <CustomText text={"Available Balance "} size={18} />
            <CustomText text={"0.00000000 KDA"} size={18} />
          </Box>
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ paddingInline: "12px" }}
          >
            <CustomText text={"All-Time Rewards"} size={18} />
            <CustomText text={"0.00000000 KDA"} size={18} />
          </Box>
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ paddingInline: "12px" }}
          >
            <CustomText text={"Last Payout"} size={18} />
            <CustomText text={"---"} size={18} />
          </Box>
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ paddingInline: "12px" }}
          >
            <CustomText text={"Est. Daily Reward"} size={18} />
            <CustomText text={"0.00000000 KDA"} size={18} />
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        mb='10%'
        sx={{
          marginTop: "20px",
          height: "500px",
          borderRadius: "12px",
          padding: "12px",
          backgroundColor:
            theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
        }}
        flexDirection={"column"}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <CustomText text={"Rewards Chart"} size={20} />
            <Box display={"flex"} flexDirection={"row"}>
            <TextField
              id="date"
              type="date"
              defaultValue={new Date().toISOString().substring(0, 10)}
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark" ? "#4A3067" : "white",
              }}
            />
          </Box>
        </Box>
        <BarChart />
      </Box>
    </Box>
  );
};
export default HistoryPage;
