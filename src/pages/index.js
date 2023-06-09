import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { duration } from "@/data";
import { useEffect, useState } from "react";
import convertDate from "@/utils";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import TipIcon from "../../public/images/info.svg";
import Link from "next/link";
import { countries } from "@/data/country";
import { social } from "@/data/social";

export default function Home() {
  const [graphData, setGraphData] = useState([]);
  const [topLocation, setTopLocation] = useState([]);
  const [topSource, setTopSource] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await fetch(`https://fe-task-api.mainstack.io/`, {
        method: "GET",
      });
      const data = await res.json();
      const splitData = splitKeyValue(data.graph_data.views);
      setGraphData(splitData);
      setTopLocation(data.top_locations);
      setTopSource(data.top_sources);
    } catch (err) {
      console.log(err); // use toast to handle error
    }
  };
  const COLORS = [
    "hsla(211, 77%, 63%, 1)",
    "hsla(259, 90%, 64%, 1)",
    "hsla(19, 82%, 68%, 1)",
    "hsla(43, 96%, 51%, 1)",
    "hsla(158, 85%, 39%, 1)",
  ];

  const CustomTooltip = ({ payload, active }) => {
    if (active && payload && payload.length) {
      return (
        <div className="shadow-xl bg-primary-light/80 rounded-xl w-28 fixed text-center z-10 p-3 text-sm">
          <div className="pb-2 flex bg-primary-light/80 text-primary/80 font-medium items-center justify-between">
            {" "}
            <p className="bg-primary-light/80 ">Date :</p>
            <p className="bg-primary-light/80 "> {payload[0].payload.date}</p>
          </div>
          <div className="bg-primary-light/80 text-primary/80  font-medium flex items-center justify-between">
            {" "}
            <p className="bg-primary-light/80 ">Views :</p>
            <p className="bg-primary-light/80 "> {payload[0].payload.views}</p>
          </div>
        </div>
      );
    }
  };
  const CustomizedLegend = (props) => {
    const { payload, name } = props;

    return (
      <ul>
        {name === "topLocation"
          ? payload.map((entry, index) => (
              <li
                key={`item-${index}`}
                className="flex items-center gap-2 my-5 text-sm"
              >
                <p className="flex items-center">
                  {" "}
                  {countries.map((country) =>
                    country.countryNameEn === entry.payload.country ? (
                      <span
                        key={country.countryNameEn}
                        class={`fi fi-${country.countryCode.toLowerCase()} rounded mr-1.5`}
                      ></span>
                    ) : (
                      ""
                    )
                  )}
                  <span className="text-black"> {entry.payload.country}</span>
                  <span className="font-semibold pl-1">
                    {entry.payload.percent}%
                  </span>{" "}
                </p>

                <span
                  style={{ backgroundColor: entry.color }}
                  className="dot"
                ></span>
              </li>
            ))
          : payload.map((entry, index) => (
              <li
                key={`item-${index}`}
                className="flex items-center gap-2 my-5 text-sm"
              >
                <p className="flex items-center">
                  {" "}
                  {social.map(({ name, Icon }) =>
                    name === entry.payload.source ? <Icon key={name} className="rounded mr-1.5" /> : ""
                  )}
                  <span className="text-black"> {entry.payload.source.charAt(0).toUpperCase()
  + entry.payload.source.slice(1)}</span>
                  <span className="font-semibold pl-1">
                    {entry.payload.percent}%
                  </span>{" "}
                </p>

                <span
                  style={{ backgroundColor: entry.color }}
                  className="dot"
                ></span>
              </li>
            ))}
      </ul>
    );
  };
  const splitKeyValue = (obj) => {
    const keys = Object.keys(obj);
    const res = [];
    for (let i = 0; i < keys.length; i++) {
      res.push({
        date: convertDate(keys[i]),
        views: obj[keys[i]],
      });
    }
    return res;
  };

  return (
    <section className="w-[48rem] md:w-auto pr-8 md:pr-0 overflow-x-auto pt-4 pb-8">
      <h1 className="text-black text-lg font-semibold"> Dashboard</h1>
      <div className="mt-8 mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-black text-2xl">
            Good morning, Blessing ⛅️
          </h2>
          <p className="text-gray-500 text-sm pt-2">
            Check out your dashboard summary.
          </p>
        </div>
        <Link href="/" className="text-primary text-sm cursor-pointer">
          View analytics
        </Link>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-4">
          {duration.map(({ id, title }) => (
            <p
              key={id}
              className={`${
                id === 4
                  ? "bg-primary-light border-primary text-primary"
                  : " border-gray text-gray-500"
              } text-sm border-[1px] cursor-pointer rounded-full py-2 px-4  hover:border-primary hover:text-primary`}
            >
              {title}
            </p>
          ))}
        </div>
        <div className="w-full my-6 p-5 border-[1px] rounded-xl border-gray">
          <div className="">
            <div className="flex items-center justify-between">
              {" "}
              <p className="text-black text-lg font-semibold">Page Views</p>
              <TipIcon className="cursor-pointer hover:text-primary" />
            </div>
            <span className="text-gray-400 text-sm">All time</span>
          </div>
          <p className="font-bold text-black text-4xl my-6">500</p>
          <div className="">
            <ResponsiveContainer width={"100%"} height={300} min-width={300}>
              <AreaChart
                key={Math.random()}
                data={graphData}
                margin={{
                  top: 10,
                  right: 0,
                  left: 0,
                  bottom: 20,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF5403" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#FF5403" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  padding={{ right: 50, left: 50 }}
                  tickLine={false}
                  tickMargin="25"
                  axisLine={false}
                  dataKey="date"
                  style={{
                    fontSize: "13px",
                    color: "#56616B",
                  }}
                />
                <YAxis
                  tickLine={false}
                  tickMargin="20"
                  axisLine={false}
                  style={{
                    fontSize: "14px",
                    color: "#56616B",
                  }}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  wrapperStyle={{
                    border: "1px solid transparent",
                    backgroundColor: "#FF5403",
                  }}
                  cursor={{ stroke: "#FF5403", strokeWidth: 1 }}
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="#FF5403"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                  baseLine={[{ x: 12, y: 15 }]}
                  isAnimationActive={true}
                  animationBegin={0}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="my-6 md:flex-col lg:flex-row flex items-center gap-8 lg:gap-1 flex-wrap justify-between">
        <div className="w-full lg:w-[49%] p-6 border-[1px] rounded-xl border-gray">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-black font-semibold text-lg">Top Locations</p>
            <Link href="/" className="text-sm text-primary cursor-pointer">
              View full reports
            </Link>
          </div>

          <PieChart
            width={400}
            height={200}
            style={{
              width: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              margin: "auto",
            }}
            className="w-auto"
          >
            <Legend
              content={<CustomizedLegend name="topLocation" />}
              align="left"
              layout="vertical"
              verticalAlign="middle"
            />
            {/* cy and cx, half of main width and height */}
            <Pie
              legendType="line"
              data={topLocation}
              cx={100}
              cy={90}
              innerRadius={45}
              outerRadius={85}
              fill="#8884d8"
              dataKey="percent"
              blendStroke="false"
            >
              {topLocation.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="w-full lg:w-[49%] p-6 border-[1px] rounded-xl border-gray">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-black font-semibold text-lg">
              Top Referral source
            </p>
            <Link href="/" className="text-sm text-primary cursor-pointer">
              View full reports
            </Link>
          </div>

          <PieChart
            width={400}
            height={200}
            style={{
              width: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              margin: "auto",
            }}
          >
            <Legend
              content={<CustomizedLegend name="topSource" />}
              align="left"
              layout="vertical"
              verticalAlign="middle"
            />
            <Pie
              legendType="line"
              data={topSource}
              cx={120}
              cy={90}
              innerRadius={45}
              outerRadius={85}
              fill="#8884d8"
              dataKey="percent"
              blendStroke="false"
            >
              {topSource.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </section>
  );
}

// tick={{ dx: 20 }}
