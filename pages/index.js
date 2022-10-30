import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

function index() {
  const router = useRouter();

  const handleclick = () => {
    router.replace("/about");
  };

  return (
    <div>
      <h1>This is Home Page</h1>
      <Link href="/about">
        <h3>Go to page</h3>
      </Link>
      <Link href="/profile">
        <h3>Go to Profile page</h3>
      </Link>
      <button onClick={handleclick}>from submitted</button>
    </div>
  )
}

export default index;
