import React from "react";

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive";
}

export const Alert: React.FC<AlertProps> = ({
  className = "",
  variant = "default",
  ...props
}) => {
  const variantStyles = {
    default: "bg-blue-50 text-blue-700",
    destructive: "bg-red-50 text-red-700",
  };

  return (
    <div
      className={`rounded-md p-4 ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
};

export const AlertTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className = "",
  ...props
}) => <h3 className={`text-sm font-medium ${className}`} {...props} />;

export const AlertDescription: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className = "", ...props }) => (
  <p className={`mt-2 text-sm ${className}`} {...props} />
);
