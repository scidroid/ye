import Quote from "../components/Quote";

const Main = ({ quote }) => {
  return <Quote quote={quote} />;
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const response = await fetch("http://localhost:3000/api/" + id);
  const result = await response.json();
  const quote = await result.quote;

  return {
    props: {
      quote,
    },
  };
};

export default Main;
