import { Box, OutlinedInput, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../Redux/Data/action";

const OuterContainer = styled(Box)(({ theme }) => ({
  //   border: "2px solid black",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  paddingTop: 250,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingTop: 120,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MapData = styled(Box)(({ theme }) => ({
  // border:"2px solid red",

  border:"1px solid black",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FirstBox = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(6,1fr)",
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextData = styled(Typography)(({ theme }) => ({
  fontSize: 10,
  color:"grey",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  color: "grey",
  fontSize: 10,
  paddingTop: 30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InputBox = styled(Box)(({ theme }) => ({
    position:"sticky",
    top:260,
    fontSize:15,
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        top:120,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Search() {
  const mainData = useSelector((store) => store.data.getData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data,setData]=useState([])

  console.log("mainData", mainData);


  const handleProduct=(id)=>{
    navigate(`/detail/${id}`)
  }

  const handleSearch=(e)=>{

    let value=e.target.value 

        const  sortData=mainData.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()))

        console.log("value",value) 
        setData(sortData)
        console.log("sortData",sortData)

  }

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <OuterContainer>
      <InnerContainer>
        <InputBox>
        <OutlinedInput onChange={handleSearch}
          sx={{ width: "100%" ,borderRadius:0,}}
          placeholder="SEARCH FOR AN ITEM, COLOUR, COLLECTION...
"
        />
</InputBox>
        <TextBox>YOU MIGHT BE INTERESTED IN</TextBox>

        <FirstBox>
          {data?.map((item) => (
            <MapData>
              <ImageBox sx={{cursor:"pointer"}} onClick={()=>handleProduct(item.id)} as={"img"} src={item.images[2]} />
              <TextData>{item.name}</TextData>
              <TextData>₹{item.price}.00</TextData>
            </MapData>
          ))}
        </FirstBox>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Search;
