import "./list.scss";
import Card from "../card/Card";

function List({ propertyList }) {
  // console.log(propertyList);
  return (
    <div className="list">
      {propertyList.length ? (propertyList.map((item) => (
        <Card key={item.id} item={item} />
      ))):
      <div className="noData">
        <img src="/No-data.png" alt="" />
      </div>
      }
    </div>
  );
}

export default List;
