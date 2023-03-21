import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import BackgroundList from "../components/BackGround/BackGround";
import Footer from "../components/Landing/Footer";
import LandingPage from "../components/Landing/Landing";
import NavBar from "../components/Nav/Navbar";
import ProyectsList from "../components/Proyects/Proyects";
import SoftSkills from "../components/Skills/soft";
import TechSkills from "../components/Skills/tech";

export const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <TechSkills />
      <SoftSkills />
      <ProyectsList />
      <BackgroundList />
      <Footer />
      <Routes></Routes>
    </div>
  );
};
