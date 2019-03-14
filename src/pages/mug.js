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
        <P1>Thanks for looking at this item!</P1>
        <Item 
        itemname= "Coffee mug"
        itemdescription="It's a cool white mug"
        itemimage="https://target.scene7.com/is/image/Target/GUEST_d1faf59c-577b-463b-8cc7-14f7980d3850?wid=488&hei=488&fmt=pjpeg"
        itemlink="/"
        itemlinktext="Click here to go back to the home page"/>
        </Wrapper>
    </StyledView>
)