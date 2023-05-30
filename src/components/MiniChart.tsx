import { IPricePointsItem } from "../utils/interfaces";

import { AreaChart, Area, ResponsiveContainer } from "recharts";

type MiniChartProps = {
  data: IPricePointsItem[];
  id: string;
  themeColor: string;
};
const MiniChart = ({ data, id, themeColor }: MiniChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        id={id}
        data={data}
        margin={{ top: 10, right: 0, bottom: 20, left: 0 }}
      >
        <defs>
          <linearGradient id={`${id}-amountColor`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={themeColor} stopOpacity={0.8} />
            <stop offset="95%" stopColor={themeColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="amount"
          stroke={themeColor}
          fillOpacity={1}
          fill={`url(#${id}-amountColor)`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MiniChart;
