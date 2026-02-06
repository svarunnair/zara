import { Box, Button, Input, OutlinedInput, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAuth } from '../../Redux/Auth/authAction'
import { useNavigate } from 'react-router-dom'


const OuterContainer = styled(Box)(({ theme }) => ({
    // border: "2px solid green",
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const InnerContainer = styled(Box)(({ theme }) => ({
    // border: "2px solid green",
    display:"flex",
    gap:120,

    paddingTop:200,
    paddingLeft:30,
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        flexDirection:'column',
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const FirstBox = styled(Box)(({ theme }) => ({
    // border: "2px solid red",
    display:"flex",
    flexDirection:"column",
    gap:10,
    textAlign:"left",
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const SecondBox = styled(Box)(({ theme }) => ({
    // border: "2px solid red",
    display:"flex",
    flexDirection:"column",
    gap:20,
    textAlign:"left",
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const TextBox = styled(Typography)(({ theme }) => ({
    
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const ButtonBox = styled(Button)(({ theme }) => ({

    width:400,
    height:30,
    ":hover":{color:"grey"},
    cursor:"pointer",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        width:300,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

function Signin() {

  const dispatch=useDispatch()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const token=localStorage.getItem('token')

  const handleEmail=(e)=>{
   let value=e.target.value 
   setEmail(value)
  }

  const handleRegister=()=>{
    navigate('/signup')
  }

  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleLogin=()=>{
    if(!email||!password){
        alert('Please fill all the details')
        return
    }else{
       let data = {
         email: email,
         password: password,
       };
       dispatch(postAuth(data));
       alert("Login successfull");
       navigate(-1);

    }
   
  }

  return (
   <OuterContainer>
    <InnerContainer>

        <FirstBox>
            
            <TextBox sx={{fontSize:15}}>LOG IN TO YOUR ACCOUNT</TextBox>
            <Input onChange={handleEmail} sx={{height:50,width:300}} placeholder='EMAIL'/><br/>
            <Input onChange={handlePassword} sx={{height:50,width:300}} placeholder='PASSWORD'/>
            <ButtonBox onClick={handleLogin} sx={{border:"1px solid black",color:'black',borderRadius:0,}}>LOG IN</ButtonBox>
            <TextBox sx={{fontSize:10,color:"grey",cursor:"pointer"}}>Have you forgotten your password?</TextBox>

        </FirstBox>

        <SecondBox>

            <TextBox>NEED AN ACCOUNT?</TextBox>
            <ButtonBox onClick={handleRegister} sx={{width:400,height:30,border:"1px solid black",color:'black',borderRadius:0}}>REGISTER</ButtonBox>


        </SecondBox>

    </InnerContainer>
   </OuterContainer>
  )
}

export default Signin