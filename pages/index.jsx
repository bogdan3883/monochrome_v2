import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
      </Head>

      <Header></Header>

      <Footer></Footer>
    </div>
  );
}
