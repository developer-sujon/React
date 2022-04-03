import React from "react";

function Button({ link, text, onClick }) {
  return <a href={link} onClick={onClick}>{text}</a>;
}

export default Button;
