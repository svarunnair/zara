import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteCart,
  getCart,
  getData,
  patchCart,
  postPayment,
} from "../Redux/Data/action";

/* ================= STYLES ================= */

const Outer = styled(Box)(() => ({
  width: "100%",
  paddingBottom: 100, // space for fixed footer
}));

const Inner = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  margin: "auto",
  paddingTop: 120,
  paddingInline: 16,
  [theme.breakpoints.down("md")]: {
    paddingTop: 80,
  },
}));

const MenuBox = styled(Box)(() => ({
  display: "flex",
  gap: 10,
  position: "sticky",
  top: 0,
  background: "#fff",
  zIndex: 10,
  paddingBottom: 10,
}));

const MenuTab = styled(Box)(() => ({
  border: "1px solid black",
  padding: "8px 12px",
  fontSize: 12,
  display: "flex",
  alignItems: "center",
  gap: 6,
}));

const CartGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 20,
  marginTop: 30,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const CartCard = styled(Box)(() => ({
  border: "1px solid #ccc",
  padding: 12,
  display: "flex",
  gap: 12,
}));

const ProductImg = styled("img")(() => ({
  width: 120,
  height: 160,
  objectFit: "cover",
}));

const InfoBox = styled(Box)(() => ({
  flex: 1,
}));

const TextSmall = styled(Typography)(() => ({
  fontSize: 11,
  color: "grey",
}));

const CountBox = styled(Box)(() => ({
  display: "flex",
  gap: 6,
  marginTop: 10,
}));

const CountBtn = styled(Box)(() => ({
  width: 30,
  height: 30,
  border: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

const AmountBar = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  background: "#fff",
  borderTop: "1px solid #ccc",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 16,
  zIndex: 20,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: 10,
  },
}));

const ContinueBtn = styled(Button)(() => ({
  background: "black",
  color: "white",
  borderRadius: 0,
  height: 50,
  width: 180,
  "&:hover": { background: "black" },
}));

const RecommendGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gap: 20,
  marginTop: 30,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

/* ================= COMPONENT ================= */

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartData = useSelector((store) => store.data.getCartData);
  const mainData = useSelector((store) => store.data.getData);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getCart());
    dispatch(getData());
  }, []);

  const handleAdd = (id, q) => dispatch(patchCart(id, { quant: q + 1 }));
  const handleReduce = (id, q) =>
    q > 1 && dispatch(patchCart(id, { quant: q - 1 }));
  const handleDelete = (id) => dispatch(deleteCart(id));

  const handleContinue = () => {
    if (!token) {
      alert("Kindly login");
      navigate("/signin");
    } else {
      dispatch(postPayment(...cartData));
      navigate("/payment");
    }
  };

  const total = cartData.reduce(
    (acc, item) => acc + item.price * item.quant,
    0,
  );

  return (
    <Outer>
      <Inner>
        <MenuBox>
          <MenuTab>SHOPPING BAG</MenuTab>
          <MenuTab>
            FAVOURITES <BookmarkBorderOutlinedIcon fontSize="small" />
          </MenuTab>
        </MenuBox>

        <CartGrid>
          {cartData.map((item) => (
            <CartCard key={item.id}>
              <ProductImg src={item.images[0]} />
              <InfoBox>
                <TextSmall>
                  {item.name}
                  <CloseOutlinedIcon
                    sx={{ cursor: "pointer", ml: 1 }}
                    onClick={() => handleDelete(item.id)}
                  />
                </TextSmall>
                <TextSmall>₹ {item.price}.00</TextSmall>
                <TextSmall>Size</TextSmall>

                <CountBox>
                  <CountBtn onClick={() => handleAdd(item.id, item.quant)}>
                    +
                  </CountBtn>
                  <CountBtn>{item.quant}</CountBtn>
                  <CountBtn onClick={() => handleReduce(item.id, item.quant)}>
                    −
                  </CountBtn>
                </CountBox>
              </InfoBox>
            </CartCard>
          ))}
        </CartGrid>

        <TextSmall sx={{ mt: 5 }}>YOU MAY ALSO LIKE</TextSmall>

        <RecommendGrid>
          {mainData.map((item) => (
            <Box key={item.id}>
              <ProductImg
                src={item.images[0]}
                onClick={() => navigate(`/detail/${item.id}`)}
                style={{ cursor: "pointer" }}
              />
              <TextSmall>{item.name}</TextSmall>
              <TextSmall>₹ {item.price}</TextSmall>
            </Box>
          ))}
        </RecommendGrid>
      </Inner>

      <AmountBar>
        <Box>
          <Typography fontSize={12} fontWeight={600}>
            TOTAL ₹ {total}.00
          </Typography>
          <TextSmall>INCLUDING GST</TextSmall>
          <TextSmall>* EXCL SHIPPING COST</TextSmall>
        </Box>

        <ContinueBtn onClick={handleContinue}>Continue</ContinueBtn>
      </AmountBar>
    </Outer>
  );
}

export default Cart;
