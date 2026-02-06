import { Box, Button, OutlinedInput, Typography, styled } from "@mui/material";
import React from "react";

const OuterContainer = styled(Box)(() => ({
  width: "100%",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(12),

  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(8),
  },
}));

/* HERO SECTION */
const HeroBox = styled(Box)(() => ({
  position: "relative",
  width: "100%",
}));

const SearchBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 700,

  [theme.breakpoints.down("sm")]: {
    top: "65%",
  },
}));

const ImageBox = styled(Box)(() => ({
  width: "100%",
  height: "auto",
}));

/* FAQ SECTION */
const SecondBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2),
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

/* HELP TOPICS */
const ThirdBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 2),
}));

const ContainerDiv = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(2),

  gridTemplateColumns: "repeat(4, 1fr)",

  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const DataBox = styled(Box)(() => ({
  border: "1px solid black",
  padding: 16,
  display: "flex",
  flexDirection: "column",
  gap: 6,
}));

const DataTextTitle = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 500,
}));

const DataText = styled(Typography)(() => ({
  fontSize: 11,
  color: "grey",
}));

function Help() {
  return (
    <OuterContainer>
      <InnerContainer>
        {/* HERO */}
        <HeroBox>
          <SearchBox>
            <OutlinedInput
              fullWidth
              sx={{ background: "white", height: 40 }}
              placeholder="HOW CAN WE HELP YOU"
            />
          </SearchBox>

          <ImageBox
            component="img"
            src={require("../Assets/Img/zaraBg.jpg")}
            alt="Help Banner"
          />
        </HeroBox>

        {/* FAQ */}
        <SecondBox>
          <Typography>FREQUENTLY ASKED QUESTIONS</Typography>

          <ButtonBox>
            {[
              "ITEMS AVAILABLE",
              "HOW TO RETURN",
              "ORDER STATUS",
              "REFUNDS",
            ].map((item) => (
              <Button
                key={item}
                sx={{
                  border: "1px solid black",
                  color: "grey",
                  fontSize: 9,
                  borderRadius: 0,
                }}
              >
                {item}
              </Button>
            ))}
          </ButtonBox>
        </SecondBox>

        {/* HELP TOPICS */}
        <ThirdBox>
          <Typography sx={{ mb: 2 }}>ALL HELP TOPICS</Typography>

          <ContainerDiv>
            {[
              {
                title: "MY ZARA ACCOUNT",
                items: [
                  "REGISTRATION AND LOG IN",
                  "MANAGING MY PROFILE",
                  "MY FAVOURITES",
                ],
              },
              {
                title: "ITEMS AND SIZES",
                items: [
                  "ITEMS AVAILABILITY",
                  "WHAT’S MY SIZE?",
                  "COMPOSITION AND CARE",
                ],
              },
              {
                title: "GIFT OPTIONS",
                items: ["GIFT CARD"],
              },
              {
                title: "SHIPPING",
                items: [
                  "SHIPPING METHODS",
                  "ORDERS IN SEVERAL SHIPMENTS",
                  "WHERE DO WE SHIP?",
                ],
              },
            ].map((section) => (
              <DataBox key={section.title}>
                <DataTextTitle>{section.title}</DataTextTitle>
                {section.items.map((text) => (
                  <DataText key={text}>{text}</DataText>
                ))}
              </DataBox>
            ))}
          </ContainerDiv>
        </ThirdBox>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Help;
