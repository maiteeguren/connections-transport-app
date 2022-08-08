import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "../List";
import ConnectionForm from "../ConnectionForm";
import Overview from "../Overview";
import Navbar from "../NavBar";

export default function App() {
  const [connections, setConnections] = useState([
    {
      id: "1",
      stops: ["2273", "1071", "31845"],
      title: "Home Commute",
    },
  ]);

  const handleAddConnection = (newConnection) => {
    setConnections([...connections, newConnection]);
  };

  return (
    <Router>
      <div className="App">
        <div className="mobile-frame">
          <div className="mobile-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<List connections={connections} />} />
              <Route
                path="/new"
                element={
                  <ConnectionForm
                    onAddConnection={handleAddConnection}
                    length={connections.length}
                  />
                }
              />
              <Route
                path="/connection/:id"
                element={<Overview connections={connections} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
