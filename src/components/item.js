import React from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';
import { type } from 'os';

const ItemContainer = styled.div`
    margin: 3rem auto;
    max-width: 600px;
`;
const ItemImage = styled.img`
    flex: 0 0 96px;
    width: 96px;
    height: 96px;
    margin: 0;
    border:solid;
`;

const ItemName = styled.h1`
    margin: 0 0 12px 0;
    padding: 0;
`;

const ItemDescription = styled.p`
    margin: 0;
`;

const ItemLink = styled.p`
    margin: 0;
`;

const ItemDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto 12px auto;
`;

const Item = (props) => {
    return(
        <ItemContainer>
                <ItemDiv>
                    <ItemImage src={props.itemimage} alt=""/>
                    <ItemName>{props.itemname}</ItemName>
                    <ItemDescription>{props.itemdescription}</ItemDescription>
                    <ItemLink to={props.itemlink}>Click here to view more information</ItemLink>
                </ItemDiv>
        </ItemContainer>
    )
}
export default Item