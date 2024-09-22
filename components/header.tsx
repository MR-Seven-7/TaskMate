"use client";

import React from "react";
import "../app/globals.css";

const Header = () => {
  return (
    <header className="flex flex-row justify-between p-4">
      <h1 className="protest-guerrilla-regular fascinate-inline-regular text-4xl">
        TaskMate
      </h1>
      <nav className="flex flex-row gap-9 text-xl">
        <ul className="flex flex-row items-center gap-4">
          <li>Dashboard</li>
          <li>Teams</li>
          <li>Tasks</li>
        </ul>
        <button
          className="btn-round bg-white text-black"
          onClick={() =>
            (window.location.href = "http://localhost:5001/auth/google")
          }
        >
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;
