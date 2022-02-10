import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <>
      <>CoffeeStore Page {id}</>
      <Link href="/">
        <a>Back To Home</a>
      </Link>

      <Link href="/coffee-store/{id}">
        <a>Go To Page Dynamic</a>
      </Link>
    </>
  );
};

export default CoffeeStore;
