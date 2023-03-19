import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/Landing/Landing";
import NavBar from "../components/Nav/Navbar";

export const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Routes></Routes>
    </div>
  );
};
