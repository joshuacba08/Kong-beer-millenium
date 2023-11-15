import "./Button.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={`button button--${props.variant}`}
      style={{ fontSize: props.fontSize ? props.fontSize : "1rem" }}
    >
      {props.title}
    </button>
  );
};

export default Button;
