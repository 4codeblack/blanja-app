import React from "react";
import Router from "./config/Router";
import "./App.css";
import EditProfileProvider from "./context/EditProfileContext";
import CustomerProvider from "./context/CustomerContext";

function App() {
  return (
    <CustomerProvider>
      <EditProfileProvider>
        <Router />
      </EditProfileProvider>
    </CustomerProvider>
  );
}

export default App;
