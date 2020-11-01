import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h2>ErrorPage 404</h2>
      <Link to="/">Go back to main page</Link>
    </>
  );
}

export default ErrorPage;
