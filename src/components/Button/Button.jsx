import "./Button.css";

const Button = (props) => {
  return (
    <button className={`button button--${props.variant}`}>{props.title}</button>
  );
};

export default Button;
