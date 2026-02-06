import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import { useDispatch, useSelector } from "react-redux";
import { getSignup } from "../Redux/Auth/authAction";
import { useNavigate } from "react-router-dom";
import { getAddress, getPayment } from "../Redux/Data/action";
import moment from "moment";

const OuterContainer = styled(Box)(({ theme }) => ({
  // border:"1px solid yellow",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  // border:"1px solid yellow",
  paddingTop: 200,
  paddingLeft: 30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingTop: 80,
    paddingLeft: 10,
    paddingBottom: 30,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  // border:"1px solid yellow",
  textAlign: "left",
  color: "grey",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: 10,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxDiv = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  width: 400,
  height: 180,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: 300,
    height: 100,
    paddingBottom: 30,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxOne = styled(Box)(({ theme }) => ({
  border: "1px solid grey",
  width: "100%",
  height: "50%",
  display: "flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxTwo = styled(Typography)(({ theme }) => ({
  // border:"1px solid grey",
  color: "grey",
  fontSize: 10,
  textAlign: "left",
  paddingLeft: 10,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxLeft = styled(Box)(({ theme }) => ({
  border: "1px solid grey",
  width: "50%",
  height: "100%",
  display: "flex",

  flexDirection: "column",
  justifyContent: "center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxRight = styled(Box)(({ theme }) => ({
  border: "1px solid grey",
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DiscriptionBox = styled(Typography)(({ theme }) => ({
  fontSize: 10,
  color: "grey",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InnerDiv = styled(Box)(({ theme }) => ({
  // border:"2px solid red",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const CartData = styled(Box)(({ theme }) => ({

  
  paddingTop:30,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ItemDiv = styled(Box)(({ theme }) => ({
  border: "1px solid black",
 
 height:330,
 width:"32%",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
  
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  width:"100%",


 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
  
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DateDiv = styled(Box)(({ theme }) => ({
    // border: "1px solid black",
    width:"100%",
    display:"flex",
    justifyContent:'space-between',
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DateData = styled(Typography)(({ theme }) => ({
    // border:"2px solid red",
    color:'grey',
    paddingLeft:30,
    paddingTop:30,
    fontSize:10,
    display:"flex",
    justifyContent:"right",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


const DeliveryDate = styled(Typography)(({ theme }) => ({
    // border:"2px solid red",
    textAlign:"left",
    fontSize:10,
    fontWeight:900,
    paddingLeft:30,
    paddingTop:30,

  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

const MapData = styled(Box)(({ theme }) => ({
    // border: "2px solid blue",
    width:130,
    paddingTop:50,
    
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
 
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const BottomBox = styled(Box)(({ theme }) => ({
    // border: "2px solid blue",
    
    paddingTop:50,
    
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
 
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const address = useSelector((store) => store.data.getAddressData);
  const payment = useSelector((store) => store.data.getPaymentData);




  const [currentDate, setCurrentDate] = useState('');
  const [dateAfter10Days, setDateAfter10Days] = useState('');

  useEffect(() => {
    // Get current date
    const current = moment().format('YYYY-MM-DD');
    setCurrentDate(current);

    // Get date after 10 days
    const after10Days = moment().add(10, 'days').format('dddd D, MMMM');
    setDateAfter10Days(after10Days);
  }, []);


  console.log("datee",dateAfter10Days)

const handleShopping=()=>{
  
  localStorage.removeItem('OTP token')
  navigate('/women')
}


const otpToken=localStorage.getItem('OTP token')


useEffect(()=>{
  if(otpToken){
    alert("Payment successfully completed")
  }
},[])


  console.log("adressss", address);
  console.log("payment", payment);

  const handleEdit = () => {
    navigate("/address");
  };
const handleOtp=()=>{
  navigate('/mobile')
}
  useEffect(() => {
    dispatch(getPayment());
  }, []);

  useEffect(() => {
    dispatch(getAddress());
  }, []);

  return (
    <OuterContainer>
      <InnerContainer>
        <TextBox>WHERE DO YOU WANT TO RECEIVE YOUR ORDER?</TextBox>

        <BoxDiv>
          <BoxOne>
            <BoxLeft>
              <InnerDiv>
                <CottageOutlinedIcon />
                <DiscriptionBox>HOME </DiscriptionBox>
              </InnerDiv>
            </BoxLeft>

            <BoxRight>
              <InnerDiv>
                <ApartmentOutlinedIcon />
                <DiscriptionBox>ZARA </DiscriptionBox>
              </InnerDiv>
            </BoxRight>
          </BoxOne>

          <BoxTwo>
            {address.map((item) => (
              <>
                <BoxTwo>{item.name}</BoxTwo>
                <BoxTwo>{item.address}</BoxTwo>
                <BoxTwo>{item.mobile}</BoxTwo>
              </>
            ))}
          </BoxTwo>

          
          <BoxTwo
            sx={{
              cursor: "pointer",
              textDecoration: "underline",
              paddingTop: 2,
            }}
            onClick={handleEdit}
          >
            Edit address
          </BoxTwo>
        </BoxDiv>

        <CartData>
          <ItemDiv>
        
            {payment.map((item) => (
              <MapData>
                <ImageBox as={"img"} src={item.images[0]} />
              </MapData>
            ))}
            <DateDiv>
<DeliveryDate>{dateAfter10Days}</DeliveryDate>
<DateData>FREE</DateData>
</DateDiv>

           
          </ItemDiv>
         
        </CartData>
      </InnerContainer>
      <Button onClick={handleOtp} sx={{border:'1px solid black',borderRadius:0,background:"black",color:'white',":hover":{background:"black",color:'white'}}} >Complete Payment by OTP</Button><br/>
     <BottomBox>
     <Button  onClick={handleShopping} sx={{border:'1px solid black',borderRadius:0,background:"black",color:'white',":hover":{background:"black",color:'white'}}} >Continue Shopping</Button>
     </BottomBox>
      
    </OuterContainer>
  );
}

export default Payment;
