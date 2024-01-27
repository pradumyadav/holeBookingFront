import { useEffect, useState } from "react";
import axios from "axios";
import "./Theater.css";
import { Link } from "react-router-dom";

export default function Theater() {
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
    <>
      <div className="Theater_Parent">
        <h2 className="Theater_h2">Choose your theater at Hitec city</h2>
        <div className="Theater_Subb_Parent">
          <input className="Theater_Input" type="date" />
          <div className="card_Parent">
            <div className="card_Sub_Parent">
              {data &&
                data.map((item) => {
                  return (
                    <div className="Card_Child">
                      <img
                        className="Theater_Img"
                        src={item.img}
                        alt="Not Found"
                      />
                      <div className="Theater_Name">{item.name}</div>
                      <div className="Theater_Prize">{item.prize}</div>
                      <div className="Theater_ExtraPrize">
                        {item.extracharges}
                      </div>
                      <div className="Theater_Available">{item.available}</div>
                      <Link to={`/dynamic/${item.id}`}>
                            <button className="btn5">Book Now</button>
                        </Link>
                      
                      <div className="Theater_people">{item.people}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
