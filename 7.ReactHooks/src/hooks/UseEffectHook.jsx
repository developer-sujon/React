import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [data, setData] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [load, setLoad] = useState(true);
  const [err, setErr] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  async function getCotacts() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos`,
      );
      const result = await response.data;
      setData(result);
      setDataList(result);
      setLoad(false);
    } catch (error) {
      setLoad(false);
      setErr(true);
    }
  }

  useEffect(() => {
    getCotacts();
  }, []);

  useEffect(() => {
    const filterDataList = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm),
    );
    setDataList(filterDataList);
  }, [searchTerm]);

  if (load) {
    return "Loding.....";
  } else {
    return err ? (
      "Error Occured"
    ) : (
      <>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {dataList.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </>
    );
  }
};

export default UseEffectHook;
