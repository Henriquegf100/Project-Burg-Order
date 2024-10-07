import styled from "styled-components";


export const Title = styled.h1`
font-family: Roboto;
font-size: 28px;
font-weight: 700;
line-height: 32.81px;
text-align: center;
color: rgba(255, 255, 255, 1) ;
margin-top:${first => first.text === 'primary' ?'25px' : '36px' } ;
margin-bottom: ${first => first.text === 'primary' ?'76px' : '50px' } ;
` 