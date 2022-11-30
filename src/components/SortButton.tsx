import { Button } from "react-bootstrap";

const SortButton = (props: any) => {
  const { text } = props;

  return (
    <Button onClick={props.onClick} {...props}>
      {text}
      {props.children}
    </Button>
  );
};

export default SortButton;
