import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function signupInfoBtn() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>일반 회원</Button>
      <Button>판매점회원</Button>
    </ButtonGroup>
  );
}
