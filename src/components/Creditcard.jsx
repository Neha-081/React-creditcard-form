import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
margin-left: 100px;
height: 300px;
width: 500px;
background: linear-gradient(to bottom, #af036d 0%, #ff99cc 100%);
border-radius: 15px;
padding: 40px;
box-shadow: 5px 10px 10px black;
& img{
    height: 40px;
    width: 60px;
  margin-right: 400px;
}

& h3{
    color: white;
    font-weight: bolder;
    font-size: 30px;
    text-align: right;
}
& p{
    color: white;
    font-weight: bolder;
    font-size: 25px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
& div{
    display: flex;
    justify-content: space-between;
    padding-right: 140px;
& p{
    font-size: 15px;
}
& h6{
    color: white;
    font-size: 10px;
}
}
`




export default function CreditCard({children}) {
    return (
      <Card>
        {children}
      </Card>
    )
  }