import { useState } from "react";
import "./App.css";
import Header from "@/components/header";
import Main from "@/components/main";
import Footer from "@/components/footer";

function App() {
  return (
    <>
      <Header title="🏡 HouseMate"></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
