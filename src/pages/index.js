import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout';

export default function Home({countries}) {
  return (
      <Layout>
        <div>Found {countries.length} countries</div>
      </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries
    },
  }
}
