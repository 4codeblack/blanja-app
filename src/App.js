import React from "react";
import Router from "./config/Router";
import "./App.css";
import EditProfileProvider from "./context/EditProfileContext";
import CustomerProvider from "./context/CustomerContext";
import SearchProvider from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <CustomerProvider>
        <EditProfileProvider>
          <Router />
        </EditProfileProvider>
      </CustomerProvider>
    </SearchProvider>
  );
}

export default App;
