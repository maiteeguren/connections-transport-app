import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "../List";
import ConnectionForm from "../ConnectionForm";
import Overview from "../Overview";
import Navbar from "../NavBar";
import DataSet from "../../constants";

export default function App() {
  const [connections, setConnections] = useState(DataSet.connections);

  const handleChange = (newConnection) => {
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
                element={<ConnectionForm onChange={handleChange} length={connections.length} />}
              />
              <Route path="/connection/:id" element={<Overview connections={connections} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
