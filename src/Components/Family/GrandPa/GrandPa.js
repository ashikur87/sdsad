import React, { createContext, useContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./grandpa.css";

export const RingContext = createContext("gold");
export const MoneyContext=createContext(0)

const GrandPa = () => {
  const [money,setMoney]=useState(0)
  const ring = "diamond";
  return (
    <div className="grandpa">
      <h2>GrandPa </h2>
      <h3>Has money:{money}</h3>
      <MoneyContext.Provider value={[money,setMoney]}>
      <RingContext.Provider value={ring}>
        <section className="flex">
          <Father></Father>
          <Uncle />
          <Aunty />
        </section>
      </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;
