import { makeStyles } from "@material-ui/core";
import { FooterContainer } from './containers/footer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";
import React, { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = "Crypto Love"
  }, [])
  
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh"
    }
  }));

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
        <FooterContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
