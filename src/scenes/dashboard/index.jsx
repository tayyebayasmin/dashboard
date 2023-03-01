import React, { useState } from "react";
import { useTheme, Box, IconButton, Button, TextField } from "@mui/material";
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
import WithDrawModal from "../../components/WithDrawModal";
import Footer from "../../components/Footer";
const Dashboard = ({windowDimenion}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [openWithdraw, setOpenWirhdraw] = useState(false);
  const handleCloseWithdraw = () => setOpenWirhdraw(false);
  var date = new Date();
  
  return (
    <>
    <Box m="3%" mb='60px' sx={{ marginInline: "3%" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header Title="Dashboard" />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        flexWrap={windowDimenion.winWidth<450?'wrap':undefined}
      >
        <Box
          display={"flex"}
          sx={{
            mt: "5px",
            minWidth: "32%",
            borderRadius: "12px",
            padding: "12px",
            width:windowDimenion.winWidth<450?'100%':undefined,
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
            ml:'1%',
            mt: "5px",
            minWidth: "32%",
            width:windowDimenion.winWidth<450?'100%':undefined,
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
            ml:'1%',
            minWidth: "32%",
            borderRadius: "12px",
            padding: "12px",
            paddingTop: "20px",
            mt: "5px",
            width:windowDimenion.winWidth<450?'100%':undefined,
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
            sx={{ paddingInline: "12px",
         }}
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
        <BarChart windowDimenion={windowDimenion}/>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        flexWrap='wrap'
      >
        <Box
          display={"flex"}
          sx={{
            marginTop: "20px",
            height: "300px",
            width: windowDimenion.winWidth<450?'100%':"580px",
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
          onClick={() => setOpenWirhdraw(true)}
        >
          Withdraw
        </Button>
        {setOpen && <AlertDialog open={open} handleClose={handleClose} />}
        {setOpenWirhdraw && (
          <WithDrawModal
            open={openWithdraw}
            handleClose={handleCloseWithdraw}
          />
        )}
      </Box>
    </Box>
    <Footer/>
    </>
  );
};
export default Dashboard;
