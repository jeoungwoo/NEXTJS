import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { fontSize } from "@mui/system";

const Buttons = props => {
  const {
    margin,
    text,
    children,
    large,
    medium,
    small,
    _onClick,
    key,
    value,
    active,
    signup,
    header,
    nullLink,
    mainBannerBtn,
  } = props;

  const styles = {
    margin,
  };

  if (large) {
    return (
      <React.Fragment>
        <LargeButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </LargeButton>
      </React.Fragment>
    );
  }

  if (medium) {
    return (
      <React.Fragment>
        <MediumButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </MediumButton>
      </React.Fragment>
    );
  }

  if (small) {
    return (
      <React.Fragment>
        <SmallButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </SmallButton>
      </React.Fragment>
    );
  }

  if (signup) {
    return (
      <React.Fragment>
        <SignupButtons
          {...styles}
          onClick={_onClick}
          key={key}
          value={value}
          active={active}
        >
          {text ? text : children}
        </SignupButtons>
      </React.Fragment>
    );
  }

  if (header) {
    return (
      <React.Fragment>
        <HeaderButtons
          {...styles}
          onClick={_onClick}
          key={key}
          value={value}
          active={active}
        >
          {text ? text : children}
        </HeaderButtons>
      </React.Fragment>
    );
  }

  if (nullLink) {
    return (
      <React.Fragment>
        <MediumButtonLink {...styles} onClick={_onClick}>
          {text ? text : children}
        </MediumButtonLink>
      </React.Fragment>
    );
  }

  if (mainBannerBtn) {
    return (
      <React.Fragment>
        <MainBannerButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </MainBannerButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <SmallButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </SmallButton>
    </React.Fragment>
  );
};

Buttons.defaultProps = {
  margin: "",
  text: "",
  children: null,
  _onClick: () => {},
  large: "",
  medium: "",
  small: "",
  dis_large: "",
  dis_medium: "",
  dis_small: "",
  key: "",
  value: "",
  active: "",
  signup: "",
  nullLink: "",
};

const SignupButtons = styled(Button)({
  color: "#FFFFFF",
  height: "44px",
  width: "312px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  fontWeight: 700,
  padding: "6px 12px",
  border: "1px solid",
  borderRadius: "2px",
  lineHeight: 1.5,
  backgroundColor: "#4069D9",
  borderColor: "#4069D9",
  boxSizing: "border-box",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    color: "#fff",
    backgroundColor: "#9CAFE3",
    borderColor: "#9CAFE3",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#10369E",
    borderColor: "#10369E",
    color: "#fff",
  },
});

export default Buttons;
