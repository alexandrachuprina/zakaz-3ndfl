import Head from "next/head";
import Image from "next/image";
import { Devonshire, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Header from "@/src/components/Header";
import Main from "@/src/components/Main";
import Timeline from "@/src/components/Timeline";
import DocsList from "@/src/components/DocsList";
import OrderForm from "@/src/components/OrderForm";
import Contacts from "@/src/components/Contacts";
import MapSection from "@/src/components/Map";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Timeline />
      <DocsList />
      <OrderForm />
      <Contacts/>
      {/* <MapSection/> */}
      <Footer/>
    </>
  );
}
