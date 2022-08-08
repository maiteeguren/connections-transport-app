import React, { useState } from "react";
import DataSet from "../../constants";
import "../App/styles.css";
import Button from "@mui/material/Button";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function ConnectionsList({ onChange, length }) {
  const [title, setTitle] = useState("");
  const [stops, setStops] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onChange({ id: (length + 1).toString(), title, stops });
    navigate("/");
  };

  const handleChangeStops = (value: string, index: number) => {
    const newStops = [...stops];
    newStops[index] = value;
    setStops(newStops);
  };

  return (
    <div className="wrapper">
      <h2>New Connection</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="input-label">
          Name
          <input
            className="input-field"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <SelectList
          required
          onChange={(e) => handleChangeStops(e.target.value, 0)}
        />
        <SelectList
          onChange={(e) => handleChangeStops(e.target.value, 1)}
        />
        <SelectList onChange={(e) => handleChangeStops(e.target.value, 2)} />
        <Button
          className="submit-button"
          variant="contained"
          fullWidth
          type="submit"
        >
          Save
        </Button>
      </form>
    </div>
  );
}

function SelectList({ required = false, onChange }) {
  const stopOptions = DataSet.stops;

  return (
    <select
      defaultValue=""
      required={required}
      className="input-field"
      onChange={onChange}
    >
      <option value="" disabled>
        Select stop
      </option>
      {stopOptions.map((option) => (
        <option value={option.id} key={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
