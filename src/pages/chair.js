import React from "react"
import styled from "styled-components";
import Item from '../components/specificitem.js';


const StyledView = styled.div`
  background-color: silver;
  padding: 20px;
  border-width: 5px;
  border: solid;
  border-color: #c69;
`;

const Wrapper = styled.div`
	margin:  4rem auto;
	max-width: 600px;
`;

const Heading = styled.h1`
	text-align:center;
`;

const P1 = styled.p`
	text-align:center;
`;

const HeadingDiv = styled.div`
	background-color:white;
	border:solid;
	text-align:center;
`;

export default () => (
	<StyledView>
		<Wrapper>
			<HeadingDiv>
				<Heading>This is a page that has random items</Heading>
				<P1>Cool item right?</P1>
			</HeadingDiv>
			<Item 
			itemname= "Chair"
			itemdescription="It's a brown chair that's pretty comfortable to sit on."
			itemimage="https://www.ikea.com/us/en/images/products/ekedalen-chair-brown__0516603_PE640439_S4.JPG"
			itemlink="/"    
			itemlinktext="Click here to go back to the home page"/>
		</Wrapper>
	</StyledView>
)