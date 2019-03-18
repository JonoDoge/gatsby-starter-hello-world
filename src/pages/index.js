import React from "react"
import styled from "styled-components";
import Item from '../components/item.js';

const StyledView = styled.div`
  background-color: silver;
  padding: 20px
  border-width: 5px
  border: solid
  border-color: #c69
`;

const Wrapper = styled.div`
  margin:  4rem auto 
  max-width: 600px
`;

const Heading = styled.h1`
  background-color: white
  border:solid
  text-align:center
`;

const P1 = styled.p`
  background-color: #c69
  text-align:center
`;

export default () => (
  <StyledView>
    <Wrapper>
      <Heading>This is a page that has random items</Heading>
      <P1>Feel free to browse through these..</P1>
      <Item 
      itemname= "Yoyo"
      itemdescription="It's a yoyo"
      itemimage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Yo-Yo-Plastic-Toy-Green.jpg/1200px-Yo-Yo-Plastic-Toy-Green.jpg"
      itemlink="/yoyo/"
      itemlinktext="Click here to view more information about the item"/>
      <Item  
      itemname= "Chair"
      itemdescription="It's a chair"
      itemimage="https://www.ikea.com/us/en/images/products/ekedalen-chair-brown__0516603_PE640439_S4.JPG"
      itemlink="/chair/"
      itemlinktext="Click here to view more information about the item" />
      <Item 
      itemname= "Coffee mug"
      itemdescription="It's a mug"
      itemimage="https://target.scene7.com/is/image/Target/GUEST_d1faf59c-577b-463b-8cc7-14f7980d3850?wid=488&hei=488&fmt=pjpeg"
      itemlink="/mug/"
      itemlinktext="Click here to view more information about the item"/>
    </Wrapper>
  </StyledView>
)
