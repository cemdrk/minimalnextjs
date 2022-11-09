const ErrorPage = ({ statusCode }) => {
  return (
    <>
      <h1>{statusCode}</h1>
    </>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode =
    res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
