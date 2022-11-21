import React from "react";
import "./Button.css";

export function ButtonGdg({ className, href, text, prefixIcon, ...props }) {
  return (
    <a
      className={`button ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {prefixIcon && <span className="gdg-button">{prefixIcon}</span>}
      <span className="tracking-wider">{text}</span>
    </a>
  );
}
