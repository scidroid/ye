import Quote from "../components/Quote";

const Main = ({ quote }) => {
  return <Quote quote={quote} />;
};

export const getServerSideProps = async () => {
  const response = await fetch("https://ye.scidroid.co/api/");
  const result = await response.json();
  const quote = await result.quote;

  return {
    props: {
      quote,
    },
  };
};

export default Main;
