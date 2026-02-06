import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getData, getDetail, postCart } from '../Redux/Data/action';

const OuterContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    paddingTop:250,
    paddingLeft:30,
    paddingBottom:190,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      paddingTop:100,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const FirstBox = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    border:"1px solid black",
    width:250,
    height:250,
    justifyContent:"center",
    textAlign:"left",
    paddingLeft:20,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display:"none",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const SecondBox = styled(Box)(({ theme }) => ({
    display:"flex",
    paddingLeft:230,
    // border:"2px solid green",
    justifyContent:"center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      paddingLeft:0,

    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ThirdBox = styled(Box)(({ theme }) => ({
    display:"flex",
    height:520,
    // border:"2px solid blue",
    paddingLeft:150,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display:"none",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TopBox = styled(Box)(({ theme }) => ({
    display:"flex",
  width:280,
  flexDirection:"column",
  textAlign:"left",
  padding:15,
  paddingLeft:20,
  height:560,

  
    border:"1px solid black",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width:390,
     
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


  const FirstDiv = styled(Box)(({ theme }) => ({
    width:280,
  display:"flex",

    border:"1px solid grey",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const FirstDivColour = styled(Box)(({ theme }) => ({

  display:"flex",
gap:10,


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ColorDiv = styled(Box)(({ theme }) => ({
    width:20,
    height:20,
  display:"flex",
  gap:10,


    border:"1px solid grey",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


  const TextData = styled(Typography)(({ theme }) => ({
    color:"grey",
    fontSize:10,
    padding:8,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
   
    width:250,
    height:400,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width:370,
      height:500,
      
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextDetails = styled(Typography)(({ theme }) => ({
    color:"grey",
    fontSize:8,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const SubDiv = styled(Box)(({ theme }) => ({
    color:"grey",
   border:"1px solid grey",
   width:130,
   height:45,
   display:"grid",
   textAlign:"center",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const SizeDiv = styled(Box)(({ theme }) => ({
    color:"grey",
    // border:"2px solid red",
    display:"grid",
    gap:5,
    paddingTop:17,
    width:"60%",
    gridTemplateColumns:"repeat(2,1fr)",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display:"flex",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const SizeData = styled(Typography)(({ theme }) => ({
    color:"grey",
 fontSize:10,
    display:"grid",
    textAlign:"center",

   
    gridTemplateColumns:"repeat(2,1fr)",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width:70,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const MapData = styled(Box)(({ theme }) => ({
  //  border:"2px solid red",
   
    gridTemplateColumns:"repeat(2,1fr)",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const BottomDiv = styled(Box)(({ theme }) => ({
    //  border:"2px solid red",
     display:"none",
     
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {
        display:"grid",
      },
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

  const MapDiv = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    display:"grid",
    gridTemplateColumns:"repeat(6,1fr)",
    
    //  gridTemplateColumns:"repeat(2,1fr)",
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {
      gridTemplateColumns:"repeat(3,1fr)",
     },
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }));


  const TextMap = styled(Typography)(({ theme }) => ({
    
    color:"grey",
    
     gridTemplateColumns:"repeat(2,1fr)",
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }));

   const InnerDiv = styled(Box)(({ theme }) => ({
    border:"1px solid black",
    color:"grey",
    
     gridTemplateColumns:"repeat(2,1fr)",
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }));

   const ImageBoxOne = styled(Box)(({ theme }) => ({
   
    width:"100%",
    
     gridTemplateColumns:"repeat(2,1fr)",
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }));

   
   const DetailPage = styled(Box)(({ theme }) => ({
   
  display:"none",
    
     gridTemplateColumns:"repeat(2,1fr)",
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {
      display:"grid",
    
     },
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }));
 
function Detail() {

    const params=useParams()
    const mainData=useSelector((store)=>store.data.getData)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const detailData=useSelector((store)=>store.data.getDetails)
    const [data,setData]=useState('')
    const [count,setCount]=useState(0)


    console.log("mainData",mainData)
    console.log("params",params)
    console.log("detail",detailData)

    const handleScroll=(e)=>{

      if (e.deltaY >= 2) {
        setCount(0)
    }else{
        setCount(count+1)
    } 
    if (e.deltaY <= 0) {
        setCount(3) 
    }else{
        setCount(count-1)
    }
    
    }

    const handleAdd=()=>{
      detailData.quant=1
      dispatch(postCart(detailData))
      alert("Product added to cart successfully")
    }
    const handleProduct=(id)=>{
      navigate(`/detail/${id}`)
    }
    

    useEffect(()=>{
      if(Object.keys(detailData).length>0){
        setData(detailData.images)
      }
    },[detailData])

    useEffect(()=>{
      dispatch(getDetail(params.id))
    },[])

  return (
    <OuterContainer>

        <InnerContainer>

            <FirstBox>
                <TextData>COMPOSITION, CARE & ORIGIN</TextData>
                <TextData>COMPOSITION</TextData>
                <TextData>We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a </TextData>
            </FirstBox>


            <SecondBox>
                <ImageBox onWheel={handleScroll} as={"img"} src={data[count]}/>
            </SecondBox>

          

            <ThirdBox>

              <TopBox>
               
                <TextDetails>FEW ITEMS LEFT</TextDetails>

                <TextDetails sx={{fontSize:11,textTransform:"uppercase"}} >{detailData?.product}</TextDetails>
                <TextDetails sx={{fontSize:10,paddingTop:2}} >₹{detailData.price}.00</TextDetails>
                <TextDetails sx={{fontSize:8,paddingTop:2}}>MRP incl. of all taxes</TextDetails>
                <TextDetails sx={{fontSize:11,paddingTop:2}}>{detailData?.name}</TextDetails>

                <TextDetails sx={{fontSize:10,paddingTop:2}} >Round neck T-shirt made of a cotton blend with short sleeves.</TextDetails>

              <TextDetails sx={{paddingTop:2,cursor:"pointer"}}> CHECK IN-STORE AVAILABILITY</TextDetails>
              <TextDetails sx={{paddingTop:.5,cursor:"pointer",paddingBottom:4}}> SHIPPING, EXCHANGES AND RETURNS</TextDetails>
            
            <FirstDiv>
            </FirstDiv>

            <TextDetails sx={{paddingTop:2,paddingBottom:1}}>Colour: Ochre | 4174/637</TextDetails>
            <FirstDivColour>
              <ColorDiv sx={{background:'grey'}}></ColorDiv>
              <ColorDiv sx={{background:''}}></ColorDiv>
              <ColorDiv sx={{background:'orange'}}></ColorDiv>

            </FirstDivColour>

            <SizeDiv>
              <SubDiv>
                <SizeData>XS</SizeData>
                <SizeData>View similar</SizeData>
              </SubDiv>
              <SubDiv>
              <SizeData>XS</SizeData>
                <SizeData>View similar</SizeData>
              </SubDiv>
              <SubDiv>
              <SizeData>XS</SizeData>
                <SizeData>View similar</SizeData>
              </SubDiv>
              <SubDiv>
              <SizeData>XS</SizeData>
                <SizeData>View similar</SizeData>
              </SubDiv>
              <SubDiv>
              <SizeData>XS</SizeData>
                <SizeData>View similar</SizeData>
              </SubDiv>

            </SizeDiv>
            <TextDetails sx={{paddingTop:2,paddingBottom:1}}>This product has a smaller fit than usual.</TextDetails>
            <TextDetails sx={{paddingTop:0,paddingBottom:2}}>FIND YOUR SIZE  |  MEASUREMENT GUIDE</TextDetails>
            <Button onClick={handleAdd} sx={{border:"1px solid black",borderRadius:0,color:"grey",fontSize:10,}}>ADD</Button>
              </TopBox>
            
            </ThirdBox>


        </InnerContainer>

        <MapData>

        <DetailPage>

<TopBox>
   
   <TextDetails>FEW ITEMS LEFT</TextDetails>

   <TextDetails sx={{fontSize:11,textTransform:"uppercase"}} >{detailData?.product}</TextDetails>
   <TextDetails sx={{fontSize:10,paddingTop:2}} >₹{detailData.price}.00</TextDetails>
   <TextDetails sx={{fontSize:8,paddingTop:2}}>MRP incl. of all taxes</TextDetails>
   <TextDetails sx={{fontSize:11,paddingTop:2}}>{detailData?.name}</TextDetails>

   <TextDetails sx={{fontSize:10,paddingTop:2}} >Round neck T-shirt made of a cotton blend with short sleeves.</TextDetails>

 <TextDetails sx={{paddingTop:2,cursor:"pointer"}}> CHECK IN-STORE AVAILABILITY</TextDetails>
 <TextDetails sx={{paddingTop:.5,cursor:"pointer",paddingBottom:4}}> SHIPPING, EXCHANGES AND RETURNS</TextDetails>

<FirstDiv>
</FirstDiv>

<TextDetails sx={{paddingTop:2,paddingBottom:1}}>Colour: Ochre | 4174/637</TextDetails>
<FirstDivColour>
 <ColorDiv sx={{background:'grey'}}></ColorDiv>
 <ColorDiv sx={{background:''}}></ColorDiv>
 <ColorDiv sx={{background:'orange'}}></ColorDiv>

</FirstDivColour>

<SizeDiv>
 <SubDiv>
   <SizeData>XS</SizeData>
   <SizeData>View similar</SizeData>
 </SubDiv>
 <SubDiv>
 <SizeData>XS</SizeData>
   <SizeData>View similar</SizeData>
 </SubDiv>
 <SubDiv>
 <SizeData>XS</SizeData>
   <SizeData>View similar</SizeData>
 </SubDiv>
 <SubDiv>
 <SizeData>XS</SizeData>
   <SizeData>View similar</SizeData>
 </SubDiv>
 <SubDiv>
 <SizeData>XS</SizeData>
   <SizeData>View similar</SizeData>
 </SubDiv>

</SizeDiv>
<TextDetails sx={{paddingTop:2,paddingBottom:1}}>This product has a smaller fit than usual.</TextDetails>
<TextDetails sx={{paddingTop:0,paddingBottom:2}}>FIND YOUR SIZE  |  MEASUREMENT GUIDE</TextDetails>
<Button onClick={handleAdd} sx={{border:"1px solid black",borderRadius:0,color:"grey",fontSize:10,}}>ADD</Button>
 </TopBox>
 


 {/* responsive */}

</DetailPage>
          <TextMap sx={{textAlign:"left",fontSize:11,padding:2}}>YOU MAY ALSO LIKE</TextMap>

          <MapDiv>

            {mainData?.map((item)=>(
              <InnerDiv>
              <ImageBoxOne onClick={()=>handleProduct(item.id)} sx={{cursor:"pointer"}} as={"img"} src={item.images[2]}/>
              <TextMap sx={{fontSize:10}}>{item.name}</TextMap>
              <TextMap sx={{fontSize:10}}>₹{item.price}.00</TextMap>
              </InnerDiv>
            ))}

          </MapDiv>

        </MapData>



       


{/* <BottomDiv>
        <MapData>
          <TextMap sx={{textAlign:"left",fontSize:11,padding:2}}>YOU MAY ALSO LIKE</TextMap>

          <MapDiv>

            {mainData.map((item)=>(
              <InnerDiv>
              <ImageBoxOne as={"img"} src={item.images[2]}/>
              <TextMap sx={{fontSize:10}}>{item.name}</TextMap>
              <TextMap sx={{fontSize:10}}>₹{item.price}.00</TextMap>
              </InnerDiv>
            ))}

          </MapDiv>

        </MapData>
        </BottomDiv> */}

    </OuterContainer>
  )
}

export default Detail