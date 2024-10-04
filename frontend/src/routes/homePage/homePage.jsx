import "./homePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Lost and Found Hub:{" "}
            <span className="title-1">Reclaim Your Lost Items!</span>
          </h1>
          <p>
            Welcome to our Lost and Found Hub! Misplaced something on campus? No
            worries! Easily search and claim lost items here. From keys to
            phones, our user-friendly interface helps you navigate through found
            items waiting for reunion. Let's bring your lost treasures back
            home.
          </p>
          <Link to="/list">
            <button>Explore Items</button>
          </Link>

          <div className="boxes">
            <div className="box">
              <h1>27+</h1>
              <h2>month of Experience</h2>
            </div>
            <div className="box">
              <h1>20+</h1>
              <h2>Users</h2>
            </div>
            <div className="box">
              <h1>34+</h1>
              <h2>Property Recovered</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
