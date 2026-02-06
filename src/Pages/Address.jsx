import { Box, Button, Input, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postAddress } from '../Redux/Data/action';
import { useNavigate } from 'react-router-dom';


const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"1px solid yellow",
   
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

    const InnerContainer = styled(Box)(({ theme }) => ({
        // border:"1px solid red",
       paddingTop:200,
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {
            paddingTop:80,
          },
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));

        const FirstBox = styled(Box)(({ theme }) => ({
            // border:"2px solid red",
            width:"40%",
            padding:20,
    
              [theme.breakpoints.down("xl")]: {},
              [theme.breakpoints.down("lg")]: {},
              [theme.breakpoints.down("md")]: {
                width:"80%",
              },
              [theme.breakpoints.down("sm")]: {},
              [theme.breakpoints.down("xs")]: {},
            }));

            const TextBox = styled(Typography)(({ theme }) => ({
               
                textAlign:"left",
                paddingLeft:30,
                fontSize:15,
                color:"grey",
        
                  [theme.breakpoints.down("xl")]: {},
                  [theme.breakpoints.down("lg")]: {},
                  [theme.breakpoints.down("md")]: {},
                  [theme.breakpoints.down("sm")]: {},
                  [theme.breakpoints.down("xs")]: {},
                }));


                const InputBox = styled(Box)(({ theme }) => ({
                // border:"2px solid red",
                display:"flex",
                flexDirection:"column",
                padding:25,

                      [theme.breakpoints.down("xl")]: {},
                      [theme.breakpoints.down("lg")]: {},
                      [theme.breakpoints.down("md")]: {},
                      [theme.breakpoints.down("sm")]: {},
                      [theme.breakpoints.down("xs")]: {},
                    }));
    

function Address() {
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [pincode,setPincode]=useState('')
    const [state,setState]=useState('')
    const [mobile,setMobile]=useState('')
    const dispatch=useDispatch()
    const navigate=useNavigate()


    const handleName=(e)=>{
       let value=e.target.value 
       setName(value)
    }
    const handleAddress=(e)=>{
        let value=e.target.value 
        setAddress(value)
     }
     const handlePincode=(e)=>{
        let value=e.target.value 
        setPincode(value)
     }
     const handleState=(e)=>{
        let value=e.target.value 
        setState(value)
     }
     const handleMobile=(e)=>{
        let value=e.target.value 
        setMobile(value)
     }

     const handleSubmit=()=>{
        let data={
            name:name,
            address:address,
            pincode:pincode,
            state:state,
            mobile:mobile
        }

        dispatch(postAddress(data))
        alert('Address updates')
        navigate('/payment')
     }

  return (
    <OuterContainer>

        <InnerContainer>

            <FirstBox>


                <TextBox>EDIT YOUR BILLING ADDRESS</TextBox>
                <TextBox sx={{fontSize:10,}}>To place your order, you must first fill in your account details. You can change them in your account at any time.</TextBox>

<InputBox>

<Input onChange={handleName} placeholder='NAME'/>
<Input onChange={handleAddress} placeholder='ADDRESS'/>
<Input onChange={handlePincode} placeholder='PINCODE'/>
<Input onChange={handleState} placeholder='STATE'/>
<Input onChange={handleMobile} placeholder='MOBILE'/>

</InputBox>

<Button onClick={handleSubmit} sx={{border:"1px solid black",color:'black',borderRadius:0,width:{"xl":450,"md":350},}}>SUBMIT</Button>
            </FirstBox>




        </InnerContainer>


    </OuterContainer>
  )
}

export default Address