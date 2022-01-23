import React from "react";
import Router from "./config/Router";
import "./App.css";
import EditProfileProvider from "./context/EditProfileContext";

function App() {
  return (
    <EditProfileProvider>
      <Router />
    </EditProfileProvider>
  );
}

export default App;
