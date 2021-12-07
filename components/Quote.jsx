const Quote = ({ quote }) => {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <div>
          <h1 className="font-700 text-6xl m-6 text-center">
            &quot;{quote.toUpperCase()}&quot;
          </h1>
          <p className="font-700 text-3xl text-center"> YE WEST </p>
        </div>
      </main>
    </>
  );
};

export default Quote;
