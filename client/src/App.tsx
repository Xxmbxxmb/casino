import React from "react";
import Header from "./components/website/Header/Header";
import bjlogo from "./assets/bj-logo.jpg";
import { useAuth } from "./hooks/auth/useAuth";
import { Settings } from "./components/website/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardContainer from "./components/website/CardContainer";
import BlackJack from "./pages/BlackJack";
import { Container } from "./pages/Container";
import { Card } from "./components/blackjack/Card";
import BlackjackTable from "./components/blackjack/Table";

function App() {
  const { isAuthenticated, user } = useAuth();

  const cards = [
    {
      pinta: "♥",
      valor: 2,
    },
    {
      pinta: "♦",
      valor: 10,
    },
    {
      pinta: "♣",
      valor: 6,
    },
    {
      pinta: "♠",
      valor: "K",
    },
    {
      pinta: "♠",
      valor: "K",
    },
    {
      pinta: "♠",
      valor: "K",
    },
  ];

  const data = [
    {
      imagen: bjlogo,
      label: "Blackjack",
      route: "/blackjack",
    },
    {
      imagen: bjlogo,
      label: "Blackjack",
      route: "/blackjack",
    },
    {
      imagen: bjlogo,
      label: "Blackjack",
      route: "/blackjack",
    },
    {
      imagen: bjlogo,
      label: "Blackjack",
      route: "/blackjack",
    },
    {
      imagen: bjlogo,
      label: "Blackjack",
      route: "/blackjack",
    },
  ];
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CardContainer data={data} />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/blackjack" element={<BlackJack />} />
        <Route path="/asdf" element={<Container />} />
        <Route path="/table" element={<BlackjackTable />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
