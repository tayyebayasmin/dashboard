import React, { useState } from "react";
import { useTheme, Box, IconButton, Button } from "@mui/material";
import { tokens } from "../../themes";
import Header from "../../components/Header/Header";
import CustomText from "../../components/CustomText/CustomText";
import Icons from "../../components/Icons/Icon";
import BarChart from "../../components/BarChart/BarChart";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import { RealTimeChart } from "../../components/LiveChart";
import LineChart from "../../components/LineChart";
import AlertDialog from "../../components/ViewMoreDialog";
import { mockDataProject, mockLineData } from "../../data/mockData";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Box m="20px" sx={{ marginInline: "50px" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Dashboard" />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
      >
        <Box
          display={"flex"}
          sx={{
            minWidth: "390px",
            borderRadius: "12px",
            padding: "12px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
          <CustomText text={"My Projects"} size={20} />
          <CustomText text={"12"} size={35} />
          <CustomText text={"0.12000000 KDA"} size={18} />
          <CustomText text={"= 56 USD"} />
        </Box>
        <Box
          display={"flex"}
          sx={{
            minWidth: "390px",
            borderRadius: "12px",
            padding: "20px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
          <CustomText text={"Projects Status"} size={20} />
          <Box display={"flex"} pt={"10px"}>
            <Icons
              text={"12"}
              pt={"5px"}
              p={"3px"}
              source={theme.palette.mode === "dark" ? "done" : "donep"}
            />
            <Box ml={"50px"}>
              <Icons
                text={"10"}
                pt={"5px"}
                pl={"4px"}
                p={"4px"}
                source={
                  theme.palette.mode === "dark" ? "arrowDown" : "arrowDownp"
                }
              />
            </Box>
          </Box>
          <Box display={"flex"} marginTop={"10px"}>
            <Icons
              marginText="35px"
              text={"2"}
              pt={"5px"}
              p={"9px"}
              pl={"8px"}
              source={theme.palette.mode === "dark" ? "i" : "ip"}
            />
            <Box ml={theme.palette.mode === "dark" ? "50px" : "58px"}>
              <Icons
                text={"0"}
                pt={"4px"}
                pl={"3px"}
                p={"4px"}
                source={theme.palette.mode === "dark" ? "switch" : "switchp"}
              />
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            minWidth: "390px",
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
            <CustomText text={"Available Projects "} size={18} />
            <CustomText text={"12"} size={18} />
          </Box>
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ paddingInline: "12px" }}
          >
            <CustomText text={"Available KDA"} size={18} />
            <CustomText text={"0.12000000 KDA"} size={18} />
          </Box>
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ paddingInline: "12px" }}
          >
            <CustomText text={"Available USD"} size={18} />
            <CustomText text={"$56.00"} size={18} />
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
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
            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#56327D",
                width: "25px",
                height: "25PX",
                borderRadius: "100%",
              }}
            >
              <ArrowLeftRounded />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#56327D",
                paddingInline: "5px",
                marginInline: "5px",
                borderRadius: "12px",
              }}
            >
              <text>26-1-2023 12:53 PM</text>
            </Box>
            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#56327D",
                width: "25px",
                height: "25PX",
                borderRadius: "100%",
              }}
            >
              <ArrowRightRounded />
            </IconButton>
          </Box>
        </Box>
        <BarChart />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <Box
          display={"flex"}
          sx={{
            marginTop: "20px",
            height: "300px",
            width: "580px",
            borderRadius: "12px",
            padding: "12px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CustomText text={"KDA Live Market"} size={15} />
            <Button
              sx={{
                paddingInline: "20px",
                background: "#F85844",
                borderRadius: "20px",
              }}
              variant="contained"
              onClick={() => setOpen(true)}
            >
              View More
            </Button>
          </Box>
          <RealTimeChart />
        </Box>
        <Box
          display={"flex"}
          sx={{
            marginTop: "20px",
            height: "300px",
            width: "580px",
            borderRadius: "12px",
            padding: "12px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#28094A" : "#FFFFFF",
          }}
          flexDirection={"column"}
        >
          <Box
            display="flex"
            flexDirection={"row"}
            justifyContent="space-between"
            alignItems="center"
          >
            <CustomText
              text={`Effieciency of Project ${mockDataProject[count].id}`}
              size={15}
            />
            <Box display={"flex"} flexDirection={"row"}>
              <IconButton
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#56327D",
                  width: "25px",
                  height: "25PX",
                  borderRadius: "100%",
                }}
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                }}
              >
                <ArrowLeftRounded />
              </IconButton>
              <IconButton
                sx={{
                  marginLeft: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#56327D",
                  width: "25px",
                  height: "25PX",
                  borderRadius: "100%",
                }}
                onClick={() => {
                  if (count < mockDataProject.length - 1) setCount(count + 1);
                }}
              >
                <ArrowRightRounded />
              </IconButton>
            </Box>
          </Box>
          <LineChart data={mockLineData[count]} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          margin: "10px",
        }}
      >
        <Button
          sx={{
            paddingInline: "30px",
            background: "#860662",
            borderRadius: "20px",
          }}
          variant="contained"
        >
          Withdraw
        </Button>
        {setOpen && <AlertDialog open={open} handleClose={handleClose} />}
      </Box>
    </Box>
  );
};
export default Dashboard;
