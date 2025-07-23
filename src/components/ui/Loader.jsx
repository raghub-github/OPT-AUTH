// src/components/ui/Loader.jsx

import React from "react";
import classNames from "classnames";

export default function Loader({ size = "md", className = "" }) {
  const sizes = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-4",
    lg: "h-10 w-10 border-4",
  };

  return (
    <div
      className={classNames(
        "inline-block animate-spin rounded-full border-t-transparent border-blue-500",
        sizes[size],
        className
      )}
    />
  );
}
