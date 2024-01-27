import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Dynamic.css";
export default function Dynamic() {
  const { section } = useParams();
  console.log(section);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/api/getdata")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="card_Parent1">
        <div className="card_Sub_Parent1">
          {data
            .filter((item) => item.id === parseInt(section))
            .map((item) => {
              return (
                <div className="Card_Child1">
                  <div className="dynamic_Left">
                    <img
                      className="Theater_Img1"
                      src={item.img}
                      alt="Not Found"
                    />
                  </div>

                  <div className="dynamic_right">
                    <div className="Theater_Name1">{item.name}</div>
                    <div className="Theater_Prize1">{item.prize}</div>
                    <div className="Theater_ExtraPrize1">
                      {item.extracharges}
                    </div>
                    <div className="Theater_Available1">{item.available}</div>
                    <div className="Theater_people1">{item.people}</div>
                    <div>
                      {new Date().toLocaleString("en-US", {
                        timeZone: "Asia/Kolkata",
                      })}
                    </div>
                    <br/>
                    <svg
                      className="logo_Dynamic"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                    <br/>
                    <div className="dynamic_h1">

                        <h1>THANK YOU FOR BOOKING</h1>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
