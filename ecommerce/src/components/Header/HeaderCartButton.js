import { Button } from "react-bootstrap";
const HeaderCartButton = (props) => {
  return (
    <Button variant="dark" className=" border-primary" onClick={props.onClick}>Cart</Button>
  );
};

export default HeaderCartButton;
