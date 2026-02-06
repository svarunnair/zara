import {
  Box,
  Button,
  Checkbox,
  Input,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postSignup } from "../../Redux/Auth/authAction";
import { useNavigate } from "react-router-dom";

const OuterContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(2),
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(10),
  width: "100%",
  maxWidth: 420,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),

  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(6),
  },
}));

const TextDetails = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 500,
}));

const InputBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const HintText = styled(Typography)(() => ({
  fontSize: 11,
  color: "grey",
  marginTop: 8,
}));

const CheckRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: 6,
}));

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [checked, setChecked] = useState(true);

  const handleCreate = () => {
    if (!email || !password || !name || !telephone) {
      alert("Please fill all details");
      return;
    }

    dispatch(
      postSignup({
        email,
        password,
        name,
        telephone,
      }),
    );

    alert("Account created successfully");
    navigate("/signin");
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <TextDetails>PERSONAL DETAILS</TextDetails>

        <InputBox>
          <Input
            placeholder="E-MAIL"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input placeholder="NAME" onChange={(e) => setName(e.target.value)} />
          <Input
            placeholder="TELEPHONE"
            onChange={(e) => setTelephone(e.target.value)}
          />
          <HintText>
            We will send you an SMS to verify your phone number
          </HintText>
        </InputBox>

        <CheckRow>
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <HintText>I wish to receive Zara news on my e-mail</HintText>
        </CheckRow>

        <CheckRow>
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <HintText>I accept the privacy statement</HintText>
        </CheckRow>

        <Button
          onClick={handleCreate}
          sx={{
            border: "1px solid black",
            color: "black",
            borderRadius: 0,
            height: 48,
            width: "100%",
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        >
          CREATE ACCOUNT
        </Button>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Signup;
