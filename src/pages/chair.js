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
            <P1>Cool item right?</P1>
            <Item 
            itemname= "Chair"
            itemdescription="It's a brown chair that's pretty comfortable to sit on."
            itemimage="https://www.ikea.com/us/en/images/products/ekedalen-chair-brown__0516603_PE640439_S4.JPG"
            itemlink="/"    
            itemlinktext="Click here to go back to the home page"/>
        </Wrapper>
    </StyledView>
)