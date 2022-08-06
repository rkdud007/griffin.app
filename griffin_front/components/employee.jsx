import { useEffect, useState } from "react";
import { getEmployeeApi } from "../api/employee";
import styles from "../styles/employee.module.css";
import "antd/dist/antd.css";
import { Table } from "antd";

export default function Employee() {
  const [employeeReList, setEmployeeReList] = useState([]);
  const [employeeNReList, setEmployeeNReList] = useState([]);
  const [totalEmplyeeList, setTotalEmployeeList] = useState([]);
  const [totalEmployee, setTotalEmployee] = useState();
  const [employerId, setEmployerId] = useState(2);
  const getEmployee = async (employerId) => {
    console.log(employerId);
    const res = await getEmployeeApi(employerId);
    setEmployeeNReList(res.data.repeat_false);
    setEmployeeReList(res.data.repeat_true);
    setTotalEmployee(res.data.total_length);
    setTotalEmployeeList(res.data.repeat_true.concat(res.data.repeat_false));
    console.log(res);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Positioin",
      dataIndex: "position",
    },
    {
      title: "Wallet",
      dataIndex: "account",
    },
    {
      title: "Payroll",
      dataIndex: "payroll",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
  ];
  useEffect(() => {
    getEmployee(employerId);
  }, []);
  const [showMode, setShowMode] = useState(0);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        id: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        id: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <>
      <div>
        <button onClick={() => setShowMode(0)}>Total</button>
        <button onClick={() => setShowMode(1)}>Full-Time</button>
        <button onClick={() => setShowMode(2)}>Contract</button>
      </div>
      {showMode === 0 ? (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={totalEmplyeeList}
        />
      ) : showMode === 1 ? (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={employeeReList}
        />
      ) : (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={employeeNReList}
        />
      )}
    </>
  );
}
