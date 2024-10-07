import styled from "styled-components";


export const Button = styled.button`
width: 342px;
height: 68px;
margin-top: ${props => props.theme === 'secondary' ? '34px' : '85px'} ;
margin-left: 36px;
font-size: 17px;
font-weight: 900;
line-height: 2.5px;
text-align: center;
color: rgba(255, 255, 255, 1);
background:${props => props.theme === 'secondary' ? ' rgba(217, 56, 86, 1)' : 'rgba(255, 255, 255, 0.14)' } ;
cursor: pointer;
&:hover{
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}
`
