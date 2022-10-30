import Link from "next/link";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function index() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link href="/about">
        <h3>Go to page</h3>
      </Link>
      <Link href="/profile">
        <h3>Go to Profile page</h3>
      </Link>
      
    </div>
  )
}

export default index;
