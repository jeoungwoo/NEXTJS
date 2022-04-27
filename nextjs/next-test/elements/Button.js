import React from "react";
import styled from "styled-components";

const Button = props => {
  const {
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    type,
    size,
    fontWeight,
    color,
    bgColor,
    _onClick,
    children,
    bold,
    text,
    outline,
    minWidth,
    maxWidth,
  } = props;

  const styles = {
    width,
    height,
    margin,
    padding,
    border,
    borderRadius,
    type,
    size,
    fontWeight,
    color,
    bgColor,
    _onClick,
    children,
    bold,
    text,
    outline,
    minWidth,
    maxWidth,
  };

  return (
    <React.Fragment>
      <Elbutton {...styles} onClick={_onClick}>
        {children}
      </Elbutton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  width: "",
  margin: "",
  padding: "",
  text: "텍스트를 입력해주세요",
  borderRadius: "",
  type: "submit",
  isShadow: "",
  fontWeight: "bold",
  _onClick: () => {},
  children: null,
  bold: "",
  minWidth: "",
  maxWidth: "",
  color: "",
  backgroundColor: "",
};

const Elbutton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  outline: ${props => props.outline};
  text: ${props => props.text};
  font-size: ${props => props.size};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  cursor: pointer;
  box-sizing: border-box;
  minWith :${props => props.minWidth};
  maxWith: ${props => props.maxWidth};
  font-weight: ${props => (props.bold ? "700" : "400")};
  ${props =>
    props.isShadow
      ? `box-shadow:0 3px 6px rgba(0, 0, 0, 0.12), 0 2px 5px rgba(0, 0, 0, 0.12);`
      : ""}
 
  &:hover {
    box-shadow: none;
    transition: all 0.5s;
    background-color: #4069D9;
    border-radius: 2px;
    color: white;
  }
  &:active {
    box-shadow: none;
    background-color: #4069D9;
    border-color: #ffffff;
    border-radius: 2px;
    color: #ffffff;
  },
`;

export default Button;
