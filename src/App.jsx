import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <Container className="App" maxW="xxl" mx="auto" overflow={"hidden"} p={0}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Container>
  );
};

export default App;
