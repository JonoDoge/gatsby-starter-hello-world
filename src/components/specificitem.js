import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components'

const ItemContainer = styled.div`
	margin: 3rem auto;
	max-width: 600px;
`;
const ItemImage = styled.img`
	flex: 0 0 96px;
	width: 240px;
	height: 240px;
	margin: 0;
	border:solid;
`;

const ItemName = styled.h1`
	margin: 0 0 12px 0;
	padding: 0;
	
`;

const ItemText = styled.p`
	margin: 0;
`;

const ItemDescriptions = styled.div`
	flex: 1;
	margin-left: 18px;
    padding: 12px;
	border-color:gray;
	border:solid;
	text-align:center;
	background-color: white;
`;

const ItemDiv = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto 12px auto;
	border:solid;
	border-color: #c69;
	background-color: #d1d6d1;
`;


const Item = (props) => {
	return(
		<ItemContainer>
			<ItemDiv>
				<ItemImage src={props.itemimage} alt=""/>
				<ItemDescriptions>
					<ItemName>{props.itemname}</ItemName>
					<ItemText>{props.itemdescription}</ItemText>
					<Link to={props.itemlink}>{props.itemlinktext}</Link>
				</ItemDescriptions>
			</ItemDiv>
		</ItemContainer>
   )
	}
export default Item