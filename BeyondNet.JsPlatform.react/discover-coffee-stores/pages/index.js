import Head from "next/head";
import Banner from "../components/banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("Hi there!!!");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Stores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}
