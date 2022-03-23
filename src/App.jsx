import { useState, useEffect, version } from "react";
import { Button, Tag } from "antd";
import styled from "styled-components";

function App() {
  return (
    <>
      <h1>Github Action Simple:{version}</h1>
      <Button>Antd测试</Button>
      <Tag>Antd测试</Tag>
    </>
  );
}

export default App;
