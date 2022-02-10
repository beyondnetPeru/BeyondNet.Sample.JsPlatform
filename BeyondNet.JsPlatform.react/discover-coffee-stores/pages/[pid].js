import { useRouter } from "next/router";

const NextJs = () => {
  const router = useRouter();

  const { pid } = router.query;

  return <div>Welcome to Dynamic Page {pid}</div>;
};

export default NextJs;
