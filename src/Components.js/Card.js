import Header from "./Header";

const Card = () => {
  return (
    <>
      <Header />
      <div style={{ width: "80%", margin: "auto", marginTop: "20px" }}>
        <div className="card" id="1">
          <div className="card_top"></div>
          <div className="card_title">Card </div>
          <div className="desc" style={{ marginTop: "20px" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste earum
            reprehenderit doloremque, fugit nulla minima odit amet maxime ipsa
            voluptate facilis tenetur totam blanditiis, possimus, dolore Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Iste earum
            reprehenderit doloremque, fugit nulla minima odit amet maxime ipsa
            voluptate facilis tenetur totam blanditiis, possimus, dolore
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
