import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn-medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link,
  target,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const handleClick = () => {
    window.open(link);
  };

  return (
    <Link
      to={link}
      target={target}
      className="btn-mobile"
      rel="noopener noreferrer"
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={handleClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
