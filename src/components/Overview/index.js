import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataSet from "../../constants";
import "../App/styles.css";
import "./styles.css";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TramIcon from "@mui/icons-material/Tram";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";

export default function Overview({connections}) {
  let { id } = useParams();
  const connection = connections.find((connection) => connection.id === id);
  const [stopsList, setStopsList] = useState([]);

  useEffect(() => {
    const connectionStops = connection?.stops.map((connectionStop) => {
      return DataSet.stops.find(
        (dataSetStop) => dataSetStop.id === connectionStop
      );
    });

    setStopsList(connectionStops);
  }, []);

  return (
    <div className="wrapper">
      <h2>{connection?.title}</h2>
      <ul>
        {stopsList.map((stop, index) => (
          <StopInformation stop={stop} key={index} />
        ))}
      </ul>
    </div>
  );
}

function StopInformation({ stop }) {
  const departuresList = DataSet.departures;
  const stopDepartures = departuresList.filter(
    (departure) => departure.stop_id === stop.id
  );

  const icons = {
    bus: <DirectionsBusIcon />,
    tram: <TramIcon />,
    train: <DirectionsRailwayIcon />,
  };

  return (
    <ListItem className="stop-item">
      <div className="mr-10">{icons[stop.mode]}</div>
      <div className="mr-10">{stop?.title}</div>
      <div className="departures-wrapper">
        {stopDepartures.map((departure) => (
          <div className="departure-item">
            {departure.departure_time_utc.slice(-9, -4)}
          </div>
        ))}
      </div>
    </ListItem>
  );
}
