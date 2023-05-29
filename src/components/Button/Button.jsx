import { useMemo } from "react";
import "./Button.css";

const Button = ({ className, disabled, children, ...otherProps }) => {
  const buttonClassName = useMemo(
    () => `button ${className ? className : ""}`,
    [className]
  );

  return (
    <button
      type="button"
      className={buttonClassName}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
