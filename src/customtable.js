import React, { useState } from "react";
import "antd/dist/antd.css";
import sortFunction from "./utility/sortfuncs";
import "./main.css";
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
    title: "Product",
    dataIndex: "name",
    key: "name",
    // render: (text) => <a>{text}</a>,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ["descend"],
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "Available",
    dataIndex: "available",
    key: "available",
    // sorter: (a, b) => a.city.length - b.city.length,
    // sortDirections: ["descend"],
  },
  {
    title: "On Hand",
    key: "onhand",
    dataIndex: "onhand",
  },
  {
    title: "Pending Dispatch",
    key: "dispatch",
    dataIndex: "dispatch",
    // render: (text, record) => (
    //   <span>
    //     <Tooltip title="edit">
    //       <Button>{<Icon type="edit" theme="outlined"></Icon>}</Button>
    //     </Tooltip>

    //     <Tooltip title="View">
    //       <Button>
    //         <Icon type="eye" theme="outlined" />
    //       </Button>
    //     </Tooltip>
    //     <Popconfirm
    //       title="Are you sure you want to delete?"
    //       onConfirm={() => this.confirm(record)}
    //       onCancel={() => this.cancel}
    //       okText="Yes"
    //       cancelText="No"
    //     >
    //       <Button>{<Icon type="delete" theme="outlined"></Icon>}</Button>
    //     </Popconfirm>
    //   </span>
    // ),
  },
  {
    title: "In transit",
    key: "transit",
    dataIndex: "transit",
  },
  {
    title: "Committed",
    key: "com",
    dataIndex: "com",
  },
  {
    title: "Required",
    key: "req",
    dataIndex: "req",
  },
  {
    title: "Order Quantity",
    key: "oq",
    dataIndex: "oq",
  },
  {
    title: "Monthly Average",
    key: "ma",
    dataIndex: "ma",
  },
];

const data = [
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
  },
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
  },
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
  },
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
  },
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
  },
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
  },
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
  },
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
  },
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
  },
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
  },
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
  },
  {
    key: "1",
    name: "French Twist - Girls RF062",
    size: "3.66",
    available: "243.5",
    onhand: 403401,
    dispatch: 212,
    transit: 213,
    com: 19.07,
    req: 105.07,
    oq: "",
    ma: 1232,
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
              paddingLeft: 100,
              paddingRight: 100,
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
