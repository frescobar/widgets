import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    if (term) {
      search();
    }
  }, [term]);
  return (
    <div className='ui form'>
      <div className='field'>
        <label>Enter Search term</label>
        <input
          className='input'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
