import React, { useState } from "react";

const Conter = (count, setCount) => {
  return (
    <>
      <button onClick={() => setCount(() => count + 1)}>++</button>
      <button>{count}</button>
      <button onClick={() => setCount(() => count - 1)}>--</button>
      <button onClick={() => setCount(() => 0)}>Reset</button>
    </>
  );
};

const UseStateHook = () => {
  const initvalue = {
    name: "Mohammad Sujon",
    email: "developersujon@yahoo.com",
    mobile: "01772703036",
  };

  const [count, setCount] = useState(0);

  // const [inuptData, setInuptData] = useState({
  //   active: true,
  //   name: "Mohammad Sujon",
  //   email: "developersujon@yahoo.com",
  //   mobile: "01772703036",
  // });

  const [inuptData, setInuptData] = useState({
    initvalue: {
      name: "Mohammad Sujon",
      email: "developersujon@yahoo.com",
      mobile: "01772703036",
    },
    active: true,
    skills: [],
  });

  console.log(inuptData.initvalue.name);

  // const handleChange = (e) => {
  //   setInuptData({
  //     ...inuptData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleChange = (e) => {
    setInuptData({
      ...inuptData,
      initvalue: {
        ...initvalue,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      {Conter(count, setCount)}
      <br />
      <input
        type="text"
        placeholder="Name"
        value={inuptData.name}
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="email"
        placeholder="Email"
        value={inuptData.email}
        name="email"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="phone"
        placeholder="Mobile"
        value={inuptData.mobile}
        name="mobile"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default UseStateHook;
