import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const initialVale = {
  data: [],
  lodings: true,
  errors: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        lodings: false,
        data: action.result,
        errors: "",
      };

    case "ERROR":
      return {
        lodings: false,
        data: [],
        errors: "There is a problem with api response",
      };

    default:
      return state;
  }
};

const useReducerHook = () => {
  const [posts, despatch] = useReducer(reducer, initialVale);
  const [tempData, setTempData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fecthPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const result = await response.data;
      despatch({ type: "SUCCESS", result });
      setTempData(result);
    } catch (error) {
      despatch({ type: "ERROR" });
      setTempData([]);
    }
  };

  useEffect(() => {
    fecthPosts();
  }, []);

  useEffect(() => {
    const filterPost = posts.data.filter((post) =>
      post.title.toLowerCase().includes(searchTerm),
    );

    setTempData(filterPost);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type here...."
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />
      {posts.lodings
        ? "Loding..."
        : tempData.map((post) => <li key={post.id}>{post.title}</li>)}
      {posts.errors || null}
    </div>
  );
};

export default useReducerHook;
