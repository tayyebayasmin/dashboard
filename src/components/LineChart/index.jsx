import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../themes";
import { mockLineData as data } from "../../data/mockData";
import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ data}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        reverse: false,
      }}
      colors={{ scheme:"dark2"}}
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
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      enableGridX={false}
      enablePoints={false}
      pointLabelYOffset={-12}
      axisBottom={{
        format:value=>``
      }}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
