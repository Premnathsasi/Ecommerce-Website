import Card from "./UI/Card";
import classes from "./DisplayList.module.css";

const DisplayList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.list.map((item) => (
          <li key={item.id}>
            <span className={classes.name}>{item.name}</span> <span>{item.description}</span> {`$${item.price}`}{" "}
            <button>Buy Large({item.l})</button>{" "}
            <button>Buy Medium({item.m})</button>{" "}
            <button>Buy Small({item.s})</button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DisplayList;
