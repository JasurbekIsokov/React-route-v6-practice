import Header from "./Header";

const Cards = () => {
  return (
    <>
      <Header />
      <div className="container cards">
        <div className="card" id="1">
          <div className="card_top"></div>
          <div className="card_title">Card 1</div>
        </div>
        <div className="card" id="2">
          <div className="card_top"></div>
          <div className="card_title">Card 2</div>
        </div>
        <div className="card" id="3">
          <div className="card_top"></div>
          <div className="card_title">Card 3</div>
        </div>
      </div>
    </>
  );
};

export default Cards;
