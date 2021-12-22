import useSWR from "swr";
import Quote from "../components/Quote";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Main = () => {
  const { data } = useSWR("/api", fetcher);
  if (!data) return <Quote quote={"Loading..."} />;
  return <Quote quote={data.quote} />;
};

export default Main;
