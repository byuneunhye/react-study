import React from "react";
import "./App.css";
import styled from "styled-components";
import Main from "./components/Main";

const Container = styled.div`
  width : 100%;
  height : 100vh;

  `;

function App(){
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App; 