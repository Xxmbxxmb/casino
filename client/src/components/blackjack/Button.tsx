import React from "react";

interface Props {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ label, onClick, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={`w-full mr-1 py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 ${
        !disabled && "dark:hover:text-white dark:hover:bg-gray-700"
      }`}
    >
      {label}
    </button>
  );
};
export default Button;
