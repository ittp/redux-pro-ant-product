import React from "react";

import "./styles.css";
import ProductList from "./Components/ProductList";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
export default function App() {
  return (
    <div className="App">
      <h1>Product List</h1>
      <PageContainer
        content="Contents"
        tabList={[
          {
            tab: "base",
            key: "base"
          },
          {
            tab: "详细信息",
            key: "info"
          }
        ]}
        extra={[
          <Button key="3">操作</Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>
        ]}
        footer={[
          <Button key="rest">重置</Button>,
          <Button key="submit" type="primary">
            提交
          </Button>
        ]}
      >
        <ProductList />
      </PageContainer>
    </div>
  );
}
