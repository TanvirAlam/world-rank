import Head from 'next/head';
import {useState} from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout/Layout';
import SearchInput from '../components/SearchInput/SearchInput';
import CountriesTable from '../components/CountriesTable/CountriesTable';

export default function Home({countries}) {

const [keyword, setKeyword] = useState("");

  const filterCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };
console.log(countries);
  return (
      <Layout>
        <div className={styles.counts}>Found {countries.length} countries</div>
        <SearchInput placeholder="Filter by name" onChange={onInputChange} />
        <CountriesTable countries={filterCountries} />
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
