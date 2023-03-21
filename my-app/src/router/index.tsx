import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/Landing/Landing";
import NavBar from "../components/Nav/Navbar";
import SoftSkills from "../components/Skills/soft";

export const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <SoftSkills />
      <Routes></Routes>
    </div>
  );
};
