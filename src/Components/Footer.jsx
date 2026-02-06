import { Box, Typography, styled } from "@mui/material";
import React from "react";

const OuterComtainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
    // border:'2px solid red',
    display:"flex",
    gap:20,
    padding:30,
    
    paddingTop:100,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        gap:0,
    padding:0,
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
   
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const FirstBox = styled(Box)(({ theme }) => ({
    // border:'2px solid blue',
    display:"flex",
    flexDirection:"column",
    gap:5,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const SecondBox = styled(Box)(({ theme }) => ({
    // border:'2px solid blue',
    display:"flex",
    flexDirection:"column",
    gap:5,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ThirdBox = styled(Box)(({ theme }) => ({
    // border:'2px solid blue',
    display:"flex",
    flexDirection:"column",
    gap:5,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const FourthBox = styled(Box)(({ theme }) => ({
    // border:'2px solid blue',
    display:"flex",
    flexDirection:"column",
    gap:5,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const BottomBox = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
   display:"flex",
   gap:900,
   paddingTop:170,
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        gap:60,
        paddingTop:40,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBoxOne = styled(Typography)(({ theme }) => ({
    
    fontSize:10,
    color:"grey",
    display:"flex",


   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        fontSize:8,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBox = styled(Typography)(({ theme }) => ({

    color:"grey",
    fontSize:10,
   textAlign:"left",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBoxTitle = styled(Typography)(({ theme }) => ({

    color:"black",
    fontSize:10,
    fontWeight:700,
    textAlign:"left",
    paddingBottom:10,
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextContent = styled(Typography)(({ theme }) => ({

   fontSize:8,
   color:"grey",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ContentBox = styled(Typography)(({ theme }) => ({

    textAlign:"left",
    paddingTop:100,
    padding:30,
    paddingBottom:80,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Footer() {
  return <OuterComtainer>

    <InnerContainer>

        <FirstBox>
            <TextBoxTitle>HELP</TextBoxTitle>
            <TextBox>MY ZARA ACCOUNT</TextBox>
            <TextBox>ITEMS AND SIZES</TextBox>
            <TextBox>GIFT OPTIONS</TextBox>
            <TextBox>SHIPPING</TextBox>
            <TextBox>PAYMENT AND INVOICES</TextBox>
            <TextBox>MY PURCHASES</TextBox>
            <TextBox>EXCHANGES, RETURNS AND</TextBox>
            <TextBox>REFUNDS</TextBox>
            <TextBox>ZARA EXPERIENCIES</TextBox>
        </FirstBox>

        <SecondBox>

        <TextBoxTitle>FOLLOW US</TextBoxTitle>
            <TextBox>NEWSLETTER</TextBox>
            <TextBox>INSTAGRAM</TextBox>
            <TextBox>FACEBOOK</TextBox>
            <TextBox>TWITTER</TextBox>
            <TextBox>PINTEREST</TextBox>
            <TextBox>YOUTUBE</TextBox>
            
        </SecondBox>

        <ThirdBox>

        <TextBoxTitle>COMPANY</TextBoxTitle>
            <TextBox>ABOUT US</TextBox>
            <TextBox>JOIN LIFE</TextBox>
            <TextBox>OFFICES</TextBox>
            <TextBox>STORES</TextBox>
            <TextBox>WORK WITH US</TextBox>
           
        </ThirdBox>

        <FourthBox>

        <TextBoxTitle>POLICIES</TextBoxTitle>
            <TextBox>PRIVACY POLICY</TextBox>
            <TextBox>PURCHASE CONDITIONS</TextBox>
            <TextBox>GIFT CARD CONDITIONS</TextBox>
            <TextBox>COOKIES SETTINGS</TextBox>
           
        </FourthBox>



    </InnerContainer>

<BottomBox>
<TextBoxOne sx={{padding:4}}>INDIA</TextBoxOne>
<TextBoxOne >ENGLISH  © ALL RIGHTS RESERVED</TextBoxOne>
</BottomBox>


<ContentBox>
<TextContent>NAME AND ADDRESS OF THE MANUFACTURER:</TextContent>
<TextContent>INDUSTRIA DE DISEÑO TEXTIL, S.A. (INDITEX, S.A.)</TextContent>
<TextContent>AVENIDA DE LA DIPUTACIÓN, EDIFICIO INDITEX, 15143, ARTEIXO (A CORUÑA), SPAIN</TextContent>

</ContentBox>

   


  </OuterComtainer>;
}

export default Footer;
