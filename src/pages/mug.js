import Layout from "../components/layout"
import React from "react"
import styles from "./styling.module.css"
import { Link } from "gatsby"
import Container from "../components/container"

const Item = props => (
    <div className={styles.item}>
      <img src={props.image} className={styles.image} alt="" />
      <div className={styles.description}>
        <h2 className={styles.itemName}>{props.itemName}</h2>
        <p className={styles.itemDescription}>{props.itemDescription}</p>
        <Link to={props.url}>{props.urltext}</Link>
      </div>
    </div>
)
export default () => (
    <Layout>
        <Container>
            <h1>Here's some more information about the coffee mug</h1>
            <Item
                itemName="Coffee mug"
                image="https://bauerpottery.com/media/catalog/product/w/h/white_coffee_mug.jpg"
                itemDescription="It's a cool lookin' mug."   
            />
        </Container>
    </Layout>
)