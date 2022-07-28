import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeCatalogPreview from '../components/HomeCatalogPreview';
import HomeContent from '../components/HomeContent';
import HomeCatalog from '../components/HomeCatalog';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monochrome</title>
      </Head>

      <Header></Header>
      <HomeCatalogPreview></HomeCatalogPreview>
      <HomeContent></HomeContent>
      <HomeCatalog></HomeCatalog>

      <Footer></Footer>
    </div>
  );
}
