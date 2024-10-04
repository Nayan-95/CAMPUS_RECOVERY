import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  // console.log(item);
  return (
    <div className="card">
      <Link to={`/${item._id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item._id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price"> {item.creator.email}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/date.png" alt="" />
              <span>{new Date(item.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="feature">
              <img src="/time.png" alt="" />
              <span>{new Date(item.createdAt).toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
