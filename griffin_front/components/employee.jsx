import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button, Table } from "antd";
import { getEmployeeApi } from "../api/employee.js";

const Employee = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMode, setShowMode] = useState(0);
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
  const start = () => {
    setLoading(true); // ajax request after empty completing

    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  useEffect(() => {
    getEmployee(employerId);
  }, []);

  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div>
        <button onClick={() => setShowMode(0)}>Total</button>
        <button onClick={() => setShowMode(1)}>Full-Time</button>
        <button onClick={() => setShowMode(2)}>Contract</button>
      </div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
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
    </div>
  );
};

export default Employee;
