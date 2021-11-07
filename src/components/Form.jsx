import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
width: 300px;
margin: auto;
text-align: left;
font-size: 12px;
& legend{
  display: flex;
}
& img{

  height: 25px;
    width: 30px;
    margin-top: 7px;

}
& input{
  outline: none;
  display: flex;
  width: 300px;
 margin-bottom: 30px;
  border: none;
  border-bottom:  2px solid #e9478b;
  padding: 5px;
  font-size: 17px;
}& div{
  display: flex;
 & input{
width: 85px;
margin-right: 20px;

 }
 & label{
   margin-right: 30px;
   margin-bottom: 10px;
 }
}
& button{
  background-color: #af094e;
  width: 120px;
  outline: none;
  font-size: 16px;
  border: #af094e;
  border-radius: 10px;
  padding: 10px;
  color: white;
  font-weight: bold;
margin-left: 90px;
margin-top: 15px;
  
}
& span{
color:#e9478b;
}
& h5{
  text-align: center;

}

`

export default function Forms({children}) {
  return (
    <Form>
      {children}
    </Form>
  )
}
