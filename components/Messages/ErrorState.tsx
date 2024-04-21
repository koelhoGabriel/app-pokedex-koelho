import React from 'react';

interface ErrorStateProps {
  message: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default ErrorState;
