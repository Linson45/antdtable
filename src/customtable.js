import React, { useState } from "react";
import "antd/dist/antd.css";
import sortFunction from "./utility/sortfuncs";
import {
  Table,
  Tag,
  Space,
  Popconfirm,
  Button,
  message,
  Pagination,
  Icon,
  Tooltip,
  pageSize,
  Layout,
  Menu,
  Input,
} from "antd";
const { Header, Footer, Sider, Content } = Layout;
const columns = [
  {
    title: "#",
    key: "index",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Address",
    dataIndex: "addr",
    key: "addr",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    sorter: (a, b) => a.city.length - b.city.length,
    sortDirections: ["descend"],
  },
  {
    title: "Pincode",
    key: "pin",
    dataIndex: "pin",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <Tooltip title="edit">
          <Button>{<Icon type="edit" theme="outlined"></Icon>}</Button>
        </Tooltip>

        <Tooltip title="View">
          <Button>
            <Icon type="eye" theme="outlined" />
          </Button>
        </Tooltip>
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => this.confirm(record)}
          onCancel={() => this.cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button>{<Icon type="delete" theme="outlined"></Icon>}</Button>
        </Popconfirm>
      </span>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    addr: "Ponda",
    city: "Curti",
    pin: 403401,
  },
  {
    key: "2",
    name: "Jim Green",
    addr: "Margao",
    city: "Marathalli",
    pin: 403601,
  },
  {
    key: "3",
    name: "Joe Black",
    addr: "Panaji",
    city: "Khazi Wada",
    pin: 403001,
  },
  {
    key: "4",
    name: "Keerthan",
    addr: "Bangalore",
    city: "Electronic city",
    pin: 403001,
  },
  {
    key: "5",
    name: "Cecil Mathew",
    addr: "Bangalore",
    city: "Electronic city",
    pin: 403001,
  },
  {
    key: "6",
    name: "Arun Jose",
    addr: "Bangalore",
    city: "Electronic city",
    pin: 403001,
  },
  {
    key: "7",
    name: "Devdatt Sawant",
    addr: "Bangalore",
    city: "HSR layout",
    pin: 403001,
  },
  {
    key: "8",
    name: "Babe Rexa",
    addr: "Bangalore",
    city: "Bellandur",
    pin: 403001,
  },
  {
    key: "9",
    name: "Pranitha Pawar",
    addr: "Panaji",
    city: "Electronic city",
    pin: 403001,
  },
  {
    key: "10",
    name: "Mantis",
    addr: "ChinchPokli",
    city: "Electronic city",
    pin: 403001,
  },
  {
    key: "11",
    name: "Joe Black",
    addr: "Panaji",
    city: "Electronic city",
    pin: 403001,
  },
  {
    key: "12",
    name: "Joe Black",
    addr: "Panaji",
    city: "Electronic city",
    pin: 403001,
  },
];

function Customtable() {
  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState("");
  return (
    <div>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <h1>Customer Details</h1>
        </Header>
        <Content>
          <div
            style={{
              paddingLeft: 300,
              paddingRight: 300,
              background: "#fff",
              minHeight: 360,
            }}
          >
            <Input
              placeholder="Search Name"
              value={value}
              onChange={(e) => {
                const currValue = e.target.value;
                setValue(currValue);
                const filteredData = data.filter((entry) =>
                  entry.name.includes(currValue)
                );
                setDataSource(filteredData);
              }}
            />
            <Table
              bordered={true}
              columns={columns}
              dataSource={data}
              pagination={{
                total: data.length,
                pageSize: 5,
                showTotal: (total, range) =>
                  `Showing ${range[0]}-${range[1]} of ${total} items`,
                defaultCurrent: 1,
                alignment: "center",
              }}
            ></Table>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Designed here @OPSPL</Footer>
      </Layout>
    </div>
  );
}
export default Customtable;
