import React from 'react'
import {Row, Col} from "react-bootstrap"
import styles from "../styles/Home.module.css"

function Home() {
  return (
    <Row className={styles.Container}>
      <Col className={`${styles.Text} text-light text-center p-5`} md={6}>
      <h1>Welcome To Gaelic Games Network!</h1>
      <p>Discover, Connect, and Celebrate the Passion for Gaelic Games with Gaelic Games Network - 
        Your Hub for All Things GAA!
      </p>
      </Col>
      <Col md={6}>
        Form
      </Col>
    </Row>
  )
}

export default Home
