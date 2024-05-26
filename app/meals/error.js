"use client";

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>Oops! Something went wrong...</h1>
      <p>
        We are sorry, but we are unable to fetch the meals at the moment. Please
        try again later.
      </p>
    </main>
  );
};

export default Error;
