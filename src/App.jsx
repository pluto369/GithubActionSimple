import { useState, useEffect, version } from "react";
import { Button, Tag, message } from "antd";
import styled from "styled-components";

function App() {
  const info = () => {
    message.info("This is a normal message");
  };

  return (
    <>
      <h1>Github Action Simple:{version}</h1>
      <Button type="primary">Antd测试</Button>
      <Tag color="orange">Antd测试</Tag>
      <Button type="dashed" onClick={info}>
        Display normal message
      </Button>
      ,
    </>
  );
}

export default App;
