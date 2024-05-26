// Purpose: This file contains the NotFound component which is rendered when a user tries to access a page that does not exist.

const NotFound = () => {
  return (
    <main className="not-found">
      <h1>Oops! Something went wrong...</h1>
      <p>
        This page could not be found. Please go back to the homepage.
      </p>
    </main>
  );
}

export default NotFound