import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../themes";
import { mockBarData as data } from "../../data/mockData";

const BarChart = ({ windowDimenion }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke:
                theme.palette.mode === "dark" ? colors.grey[100] : "#28094A",
            },
          },
          legend: {
            text: {
              fill:
                theme.palette.mode === "dark" ? colors.grey[100] : "#28094A",
            },
          },
          ticks: {
            line: {
              stroke:
                theme.palette.mode === "dark" ? colors.grey[100] : "#28094A",
              strokeWidth: 1,
            },
            text: {
              fill:
                theme.palette.mode === "dark" ? colors.grey[100] : "#28094A",
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.mode === "dark" ? colors.grey[100] : "#28094A",
          },
        },
      }}
      keys={["Daily Rewards", "7-Days Reward"]}
      indexBy="time"
      margin={{
        top: 50,
        right: windowDimenion?.winWidth > 450 && 130,
        bottom: 50,
        left: 60,
      }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "accent" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: theme.palette.mode === "dark" ? colors.grey[100] : "#28094A",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: theme.palette.mode === "dark" ? colors.grey[100] : "#28094A",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={theme.palette.mode === "dark" ? colors.grey[100] : "#28094A"}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: (value) => {
          if (windowDimenion?.winWidth < 450) {
          return  ``;
          }
        },
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        format: (value) => `${value} KDA`,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      legends={[
         {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={({ id, value, color, indexValue }) => (
        <Box
          style={{
            padding: 12,
            color,
            background: "#28094A",
          }}
        >
          <text style={{ color: "white" }}> {indexValue}</text>
          <Box flexDirection={"row"}>
            <Box></Box>
            <Box>
              <text style={{ color: "white" }}>{id}</text>
              <text style={{ color: "white", marginLeft: "10px" }}>
                {value}KDA
              </text>
            </Box>
          </Box>
        </Box>
      )}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={
        theme.palette.mode === "dark" ? colors.grey[100] : "#28094A"
      }
      role="application"
      // barAriaLabel={function (e) {
      //   return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      // }}
    />
  );
};

export default BarChart;
