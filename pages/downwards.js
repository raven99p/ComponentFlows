import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState} from 'react'
import GrandFather from '../components/grandFather'
import Father from '../components/father'


export default function downwards() {
  return (
    <div>
      <GrandFather downwards></GrandFather>
    </div>
  )
}