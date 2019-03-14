import React from "react"
import styled from "styled-components";
import Item from '../components/item.js';


const StyledView = styled.div`
  background-color: silver
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
            <P1>Wow you clicked on it</P1>
            <Item 
            itemname= "Yoyo"
            itemdescription="It's a green yoyo that can spin real nice."
            itemimage="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Yo-Yo-Plastic-Toy-Green.jpg/1200px-Yo-Yo-Plastic-Toy-Green.jpg"
            itemlink="/"
            itemlinktext="Click here to go back to the home page"/>
        </Wrapper>
  </StyledView>
)