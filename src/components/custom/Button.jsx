import styled from "styled-components";

export const Button = styled.button`
padding: 10px;
margin: auto;
border-radius: 10px;
outline: none;
background-color: ${(props)=>(props.theme==="light" ? "red" : "blue" )};
color:  ${(props)=>(props.theme==="light" ? "pink" : "red" )};
margin: auto;
transition: box-shadow 0.2s 0.3s;
&:hover{
    box-shadow:2px 4px 5px black
}

`
