import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Blog = (props) => {
  const navigation = useNavigate();

  const { id } = useParams();
  return (
    <div>
      Blog {id} <button onClick={() => navigation(-1)}>back</button>{" "}
    </div>
  );
};

export default Blog;
