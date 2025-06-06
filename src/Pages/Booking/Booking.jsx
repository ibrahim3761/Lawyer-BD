import React from "react";
import HandleBook from "./HandleBook";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,ResponsiveContainer } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;


  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};






const Booking = ({ bookedLawyers, handleCancelAppointment }) => {

    const chartData = bookedLawyers.map((lawyer) => ({
      name: lawyer.name,
      uv: lawyer.fee,
    }));
  return (
    <div>
     <div className="my-10">
       <ResponsiveContainer width="100%" height={300}>
       <BarChart
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" 
        />
        <YAxis />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
       </ResponsiveContainer>
     </div>

      {bookedLawyers.map((lawyer, index) => (
        <HandleBook
          key={index}
          handleCancelAppointment={handleCancelAppointment}
          lawyer={lawyer}
        ></HandleBook>
      ))}
    </div>
  );
};

export default Booking;
