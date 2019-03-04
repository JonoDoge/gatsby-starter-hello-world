import React from "react"
import Container from "../components/container"
import styles from "./styling.module.css"
import { Link } from "gatsby";


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
        <Container>
            <h1>This is a page that has random items</h1>
            <p>Feel free to browse through these..</p>
            <Item
                itemName="Yoyo"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Yo-Yo-Plastic-Toy-Green.jpg/1200px-Yo-Yo-Plastic-Toy-Green.jpg"
                itemDescription="It's a yoyo"
                urltext="Details"
                url="/yoyo"
            />
            
            <Item
                itemName="Chair"
                image="https://www.ikea.com/gb/en/images/products/jokkmokk-chair-antique-stain__0475400_pe615581_s4.jpg"
                itemDescription="It's a chair"
                urltext="Details"
                url="/chair"
            />
            <Item
                itemName="Coffee mug"
                image="https://bauerpottery.com/media/catalog/product/w/h/white_coffee_mug.jpg"
                itemDescription="It's a coffee mug"
                urltext="Details"
                url="/mug"
            />
        </Container>
    
     
)
