import React, { useEffect, useState } from "react";
import { fetchDescription, saveDescription } from "./utils/descriptionAPICalls";


export function Description(): JSX.Element {
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchDescription().then((data) => setDescription(data));
  }, []);

  return (
    <div>
      <textarea
        style={{ resize: "none", border: "none", width: "100%" }}
        onChange={(e) => setDescription(e.target.value)}
        onBlur={(e) => saveDescription(e.target.value)}
        value={description || "loading..."}
      />
    </div>
  );
}
