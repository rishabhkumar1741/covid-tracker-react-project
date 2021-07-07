import React, { useEffect, useState } from "react";
import "./state.css";
const Statewise = () => {
  const [arrdata, setarrdata] = useState([]);
  const getcoviddata = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const data = await res.json();
    setarrdata(data.statewise);
  };
  useEffect(() => {
    getcoviddata();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="main-heading">
          <h1 className="textcenter">
            <span className="textbold">INDIA</span> COVID-19 DASHBOARD
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="darktheam">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated </th>
              </tr>
            </thead>
            <tbody>
              {arrdata.map((currelement, index) => {
                return (
                  <tr key={index}>
                    <td>{currelement.state}</td>
                    <td>{currelement.confirmed}</td>
                    <td>{currelement.recovered}</td>
                    <td>{currelement.deaths}</td>
                    <td>{currelement.active}</td>
                    <td>{currelement.lastupdatedtime} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
