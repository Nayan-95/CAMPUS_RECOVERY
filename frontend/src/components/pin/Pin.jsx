import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: '/marker.png',
  iconSize: [25, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function Pin({ item }) {
  // console.log(item.images[0])
  return (
    <Marker position={[item.latitude, item.longitude]} icon={customIcon}>
      <Popup>
        <div className="popupContainer">
          <img src={item.images[0]} alt="" />
          <div className="textContainer">
            <Link to={`/${item._id}`}>{item.title}</Link>
            <span>Location: {item.address}</span>
            <b>Found By: {item.creator.email}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;