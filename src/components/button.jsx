const Button = (props) => {
  return (
    <a className="component-button" href={props.href} target={props.external ? "_blank" : "_self"} rel={props.external ? "noopener noreferrer" : ""}>
      {props.text}
    </a>
  );
};
