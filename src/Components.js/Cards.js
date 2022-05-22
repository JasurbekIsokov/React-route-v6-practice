import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";

const Cards = () => {
  // const navigate = useNavigate();

  // const sumbitBtn = () => {
  //   navigate("/card");
  // };

  return (
    <>
      <Header />
      <div className="container cards">
        <div className="card" id="1">
          <div className="card_top"></div>
          <div className="card_title">
            <Link style={{ textDecoration: "none" }} to={"/card"}>
              {" "}
              Card 1
            </Link>
          </div>
        </div>
        <div className="card" id="2">
          <div className="card_top"></div>
          <div className="card_title">
            <Link style={{ textDecoration: "none" }} to={"/card"}>
              {" "}
              Card 2
            </Link>
          </div>
        </div>
        <div className="card" id="3">
          <div className="card_top"></div>
          <div className="card_title">
            <Link style={{ textDecoration: "none" }} to={"/card"}>
              {" "}
              Card 3
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
