import { Column } from "@ant-design/plots";

const TotalPayroll = () => {
  const data = [
    {
      type: "Aug 2021",
      sales: 2000,
    },
    {
      type: "Sep 2021",
      sales: 1500,
    },
    {
      type: "Oct 2021",
      sales: 800,
    },
    {
      type: "Nov 2021",
      sales: 1800,
    },
    {
      type: "Dec 2021",
      sales: 1000,
    },
    {
      type: "Jan 2022",
      sales: 2000,
    },
    {
      type: "Fab 2022",
      sales: 1300,
    },
    {
      type: "Mar 2022",
      sales: 600,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
  };
  return <Column {...config} />;
};

export default TotalPayroll;
