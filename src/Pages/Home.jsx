import {
  Box,
  Button,
  Input,
  OutlinedInput,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CoverImages from "../Components/CoverImages";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import PublicRoutes from "../Routes/PublicRoutes";
import { useSelector } from "react-redux";


const OuterContainer = styled(Box)(({ theme }) => ({
  // border: "2px solid green",
  position:"sticky",
  top:0,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({
  // border: "2px solid green",
  position: "absolute",
  paddingBottom:10,
  // ":hover":{background:'rgba(255,255,255,0.7)'},
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingBottom:0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ZaraIcon = styled(Box)(({ theme }) => ({
  // border: "2px solid yellow",
  width: "25%",
  color: "black",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InputBox = styled(Box)(({ theme }) => ({
  // border: "2px solid yellow",
  padding: 25,
  paddingLeft: 170,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    padding: 0,
    paddingLeft: 0,
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TopBox = styled(Box)(({ theme }) => ({
  // border:"2px solid yellow",
  display: "flex",
  gap: 30,
  paddingLeft: 30,
  paddingTop: 20,
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  // border: "2px solid yellow",
  fontSize: 12,
  fontWeight: 200,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MenuBox = styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  display: "flex",
  gap: 15,
  padding: 15,
  paddingLeft: 50,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FirstBox = styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  display: "flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const SecondBox = styled(Box)(({ theme }) => ({
  // border: "2px solid red",
  display: "flex",
  justifyContent: "left",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextButton = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  cursor:'pointer',
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BottomInput = styled(Typography)(({ theme }) => ({
  border: "1px solid black",
  position: "absolute",
  display: "none",
  bottom: 140,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    left: 15,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxOne = styled(Typography)(({ theme }) => ({
  // border:"2px solid red",
  fontSize: 12,
  display: "flex",
  gap: 30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SideBarBox = styled(Box)(({ theme }) => ({
  border:"1px solid black",
  width: 400,
  height: 450,
  position: "absolute",
  background: "white",
  left: 40,
  top: 10,
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width: 350,
  height: 350,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageIcon = styled(Box)(({ theme }) => ({
  width: "65%",
  justifyContent: "left",
  padding: 14,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DivOne = styled(Box)(({ theme }) => ({
  display: "flex",
  border: "1px solid black",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DivTwo = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MenuListDiv = styled(Box)(({ theme }) => ({
  // border:"2px solid red",
  display: "flex",
  justifyContent: "end",
  padding: 20,
  gap: 10,
  cursor:"pointer",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ButtonBox = styled(Typography)(({ theme }) => ({
  // border:"1px solid red",
  fontSize: 13,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ProductList = styled(Box)(({ theme }) => ({
  // border:"1px solid red",
  display: "flex",
  flexDirection:'column',
  justifyContent: "end",
  gap:10,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const ButtonDiv = styled(Box)(({ theme }) => ({
  // border:"1px solid red",
  display: "flex",
  justifyContent: "end",
  gap:10,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Home() {
  const navigate = useNavigate();
  const [show,setShow]=useState(false)
  const path=useLocation()
  const cartData=useSelector((store)=>store.data.getCartData)



  console.log("cartLength",cartData.length)

  const handleMenu=()=>{
    if(show===false){
      setShow(true)
      localStorage.setItem('hide',true)
    }
    if(show===true){
      localStorage.setItem('hide',null)
      setShow(false)
    }
  }


  const handleCart=()=>{
    navigate('/cart')
  }
  const handleSearch=()=>{
    navigate('/search')
  }

  const handleMen = () => {
    navigate("/men");
    setShow(false)
  };
  const handleWoman = () => {
    navigate("/women");
    setShow(false)
  };
  const handleKids = () => {
    navigate("/kids");
    setShow(false)
  };
  const handleBeauty = () => {
    navigate("/beauty");
    setShow(false)
  };

  const handleLogin=()=>{
    navigate('/signin')
  }
  const handleHelp=()=>{
    navigate('/help')
  }
  const handleZara=()=>{
    navigate("/")
  }

  return (
    <OuterContainer>
      <InnerDiv>
        <FirstBox sx={{cursor:"pointer"}}>
          {show?<CloseIcon onClick={handleMenu} sx={{ padding: 1 }} />:<DragHandleIcon onClick={handleMenu}/>}
          <ZaraIcon onClick={handleZara}
            sx={{ padding: 1 ,cursor:"pointer"}}
            as={"img"}
            src="https://static.zara.net/photos///contents/cm/assets/logos/default-light-yellow_0.svg?ts=166922561481"
          />
          <InputBox>
            {path.pathname!=="/help"&&<OutlinedInput onClick={handleSearch}
              sx={{
                cursor:"pointer",
                height: 35,
                width: 400,
                background: "white",
                fontSize: 13,
                borderRadius: 0,
              }}
              placeholder="SEARCH"
            />}
          </InputBox>

          <TopBox>
            <BoxOne>
              <TextBox onClick={handleLogin}>LOGIN</TextBox>
              <TextBox onClick={handleHelp}>HELP</TextBox>
            </BoxOne>
            <TextBox onClick={handleCart}>SHOPING BAG({cartData.length})</TextBox>
          </TopBox>
        </FirstBox>
        
       {path.pathname==="/"&&<SecondBox>
          <MenuBox onClick={handleMenu}>
            <TextButton>WOMEN</TextButton>
            <TextButton>MEN</TextButton>
            <TextButton>KIDS</TextButton>
            <TextButton>BEAUTY</TextButton>
          </MenuBox>
        </SecondBox>}
      </InnerDiv>

      {show&&<SideBarBox sx={{bgcolor:'white'}} >
        <DivOne sx={{bgcolor:'white'}}>
          <ImageIcon
            as={"img"}
            src={require("../Assets/Img/zaraZip.png")}
          />
        </DivOne>
        <DivTwo >
          <MenuListDiv>
            <ButtonBox onClick={handleWoman}>WOMEN</ButtonBox>
            <ButtonBox onClick={handleMen}>MEN</ButtonBox>
            <ButtonBox onClick={handleKids}>KIDS</ButtonBox>
            <ButtonBox onClick={handleBeauty}>BEAUTY</ButtonBox>
          </MenuListDiv>

          <ProductList>
            <Button onClick={handleBeauty} sx={{justifyContent:'right',borderRadius:0,fontSize:10,color:"black"}}>Collections</Button>
            <ButtonDiv>
            <Button onClick={handleBeauty} sx={{border:"1px solid black",borderRadius:0,fontSize:10,color:"black"}}>Gifts</Button>
            <Button onClick={handleBeauty} sx={{border:"1px solid black",borderRadius:0,fontSize:10,color:"black"}}>Jackets</Button>
            </ButtonDiv>
            <ButtonDiv>
            <Button onClick={handleBeauty} sx={{border:"1px solid black",borderRadius:0,fontSize:10,color:"black"}}>Perfumes</Button>
            <Button onClick={handleBeauty} sx={{border:"1px solid black",borderRadius:0,fontSize:10,color:"black"}}>Jeans</Button>
            <Button onClick={handleBeauty} sx={{border:"1px solid black",borderRadius:0,fontSize:10,color:"black"}}>Tshirts</Button>
            </ButtonDiv>
            <ButtonDiv>
            <Button onClick={handleBeauty} sx={{border:"1px solid black",borderRadius:0,fontSize:10,color:"black"}}>Leather</Button>
            <Button onClick={handleBeauty} sx={{border:"1px solid black",borderRadius:0,fontSize:10,color:"black"}}>Polo shirts</Button>
            <Button onClick={handleBeauty} sx={{border:"1px solid black",borderRadius:0,fontSize:10,color:"black"}}>Suits</Button>
            </ButtonDiv>
          </ProductList>
        </DivTwo>
      </SideBarBox>}

      {path.pathname==='/'&&<CoverImages sx={{ position: "relative" }} />}

      {/* <PublicRoutes/> */}

   { !show&&  <BottomInput>
        <OutlinedInput onClick={handleSearch} sx={{ height: 20, width: 330,color:"grey" }} placeholder="SEARCH" />
      </BottomInput>}
    </OuterContainer>
  );
}

export default Home;
