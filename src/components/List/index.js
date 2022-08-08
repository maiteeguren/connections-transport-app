import React from "react";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./styles.css";
import "../App/styles.css";
import { useNavigate } from "react-router-dom";

export default function List({ connections }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/connection/${id}`);
  };

  return (
    <div className="list-wrapper">
      <div>
        <h2>My Connections</h2>
        <ul>
          {connections.map((connection, index) => {
            return (
              <ListItem key={index} className="list-item">
                <ListItemButton onClick={() => handleClick(connection.id)}>
                  <ArrowRightIcon style={{ marginRight: 10 }} />
                  {connection.title}
                </ListItemButton>
              </ListItem>
            );
          })}
        </ul>
      </div>
      <Button
        variant="contained"
        fullWidth
        onClick={() => navigate("/new")}
        className="new-connection-button"
      >
        Add a new connection
      </Button>
    </div>
  );
}
