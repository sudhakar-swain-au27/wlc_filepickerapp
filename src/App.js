import React from "react";
import "./App.css";
import { ReactOneDriveFilePicker } from "react-onedrive-filepicker";

export default function App() {
  return (
    <div className="App">
      <ReactOneDriveFilePicker
        clientID="317ed00f-e39d-491c-a2fd-fa468e19190f"
        action="share"
        multiSelect={true}
        onSuccess={(result) => {
          alert(JSON.stringify(result));
        }}
        onCancel={(result) => {
          alert(JSON.stringify(result));
        }}
      >
        <button>Upload To One Drive</button>
      </ReactOneDriveFilePicker>
      <h2>Welcome to WLC Technology</h2>

    </div>
  );
}