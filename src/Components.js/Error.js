import Header from "./Header";

const Errorr = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div style={{ border: "1px solid red" }} className="page">
          <h1 className="error">Error</h1>
        </div>
      </div>
    </>
  );
};

export default Errorr;
