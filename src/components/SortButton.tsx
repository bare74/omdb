import { Button } from "react-bootstrap";

const SortButton = (props: any) => {
  const { disableBtn, text } = props;

  return (
    <Button onClick={props.onClick} disabled={disableBtn} {...props}>
      {text}
      {props.children}
    </Button>
  );
};

export default SortButton;
