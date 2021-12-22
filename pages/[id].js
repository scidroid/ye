import { useRouter } from "next/router";
import useSWR from "swr";
import Quote from "../components/Quote";

const fetcher = (...args) => fetch(...args).then(res => res.json())
const Main = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(`/api/${id}`, fetcher);
  if (!data) return <Quote quote={"Loading..."} />;
  return <Quote quote={data.quote} />;
};

export default Main;
