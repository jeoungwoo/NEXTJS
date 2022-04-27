import React from "react";
import styled from "styled-components";

const Grid = props => {
  const {
    children,
    width,
    height,
    padding,
    margin,
    bg,
    center,
    isFlex,
    borderRadius,
    border,
    flexBasis,
    wrap,
    isShadow,
    flexEnd,
    mainFlex,
    isPosition,
    top,
    bottom,
    left,
    right,
    maxWidth,
    minWidth,
    overFlow,
    _onClick,
    zIndex,
    bgImg,
    display,
    hovers,
    cursor,
    flex,
    flexBetween,
    flexCenter,
    flexEvenly,
    flexColumnCenter,
    flexColumnEnd,
  } = props;

  const styles = {
    children,
    width,
    height,
    padding,
    margin,
    bg,
    center,
    isFlex,
    borderRadius,
    border,
    flexBasis,
    wrap,
    isShadow,
    flexEnd,
    mainFlex,
    isPosition,
    top,
    bottom,
    left,
    right,
    maxWidth,
    minWidth,
    overFlow,
    _onClick,
    zIndex,
    bgImg,
    display,
    hovers,
    cursor,
    flex,
    flexBetween,
    flexCenter,
    flexEvenly,
    flexColumnCenter,
    flexColumnEnd,
  };

  if (hovers) {
    return (
      <React.Fragment>
        <HoverBox {...styles} onClick={_onClick}>
          {children}
        </HoverBox>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  width: "",
  height: "",
  maxWidth: "",
  minWidth: "",
  padding: "",
  margin: "",
  bgImg: "",
  center: "",
  border: "",
  borderRadius: "",
  wrap: "",
  top: "",
  bottom: "",
  left: "",
  right: "",
  overflow: "",
  _onClick: () => {},
  zIndex: "",
  hovers: "",
  cursor: "",
};

const GridBox = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  max-width: ${props => props.maxWidth};
  min-width: ${props => props.minWidth};
  box-sizing: border-box;
  ${props => (props.padding ? `padding : ${props.padding}; ` : "")};
  ${props => (props.margin ? `margin : ${props.margin}; ` : "")};
  ${props => (props.bg ? `background-color : ${props.bg}` : "")};
  ${props =>
    props.isShadow
      ? `box-shadow: 1px 1px 7px 0 rgba(0, 0, 0, 0.7), 0 2px 5px rgba(0, 0, 0, 0.3);`
      : ""};
  ${props => (props.border ? `border : ${props.border};` : "")};
  ${props =>
    props.borderRadius ? `border-radius : ${props.borderRadius};` : ""};
  ${props => (props.wrap ? `flex-wrap : wrap` : "")}
  ${props => (props.isPosition ? `position : ${props.isPosition}` : "")};
  ${props => (props.top ? `top : ${props.top}` : "")};
  ${props => (props.bottom ? `bottom : ${props.bottom}` : "")};
  ${props => (props.left ? `left : ${props.left}` : "")};
  ${props => (props.right ? `right : ${props.right}` : "")};
  ${props => (props.overFlow ? `overflow: hidden;` : "")};
  ${props => (props.zIndex ? `z-index: ${props.zIndex}` : "")};
  ${props => (props.flex ? `display: flex` : "")};
  ${props =>
    props.flexBetween ? `display: flex; justify-content: space-between` : ""};
  ${props =>
    props.flexCenter
      ? `display: flex; justify-content: space-between; align-items: center;`
      : ""};
  ${props =>
    props.flexEvenly
      ? `display: flex; justify-content: space-evenly; align-items: center; `
      : ""};
  ${props =>
    props.flexColumnCenter
      ? `display: flex; flex-direction: column; align-items: center; align-content: center; `
      : ""};
  ${props =>
    props.flexColumnEnd
      ? `display: flex; flex-direction: column; align-items: flex-end; justify-content: center; `
      : ""};
`;

const HoverBox = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  max-width: ${props => props.maxWidth};
  min-width: ${props => props.minWidth};
  box-sizing: border-box;
  ${props => (props.padding ? `padding : ${props.padding}; ` : "")};
  ${props => (props.margin ? `margin : ${props.margin}; ` : "")};
  ${props => (props.bg ? `background-color : ${props.bg}` : "")};
  ${props =>
    props.isShadow
      ? `box-shadow: 1px 1px 7px 0 rgba(0, 0, 0, 0.7), 0 2px 5px rgba(0, 0, 0, 0.3);`
      : ""};
  ${props => (props.border ? `border : ${props.border};` : "")};
  ${props =>
    props.borderRadius ? `border-radius : ${props.borderRadius};` : ""};
  ${props => (props.wrap ? `flex-wrap : wrap` : "")}
  ${props => (props.isPosition ? `position : ${props.isPosition}` : "")};
  ${props => (props.top ? `top : ${props.top}` : "")};
  ${props => (props.bottom ? `top : ${props.bottom}` : "")};
  ${props => (props.left ? `right : ${props.left}` : "")};
  ${props => (props.right ? `right : ${props.right}` : "")};
  ${props => (props.overFlow ? `overflow: hidden;` : "")};
  ${props => (props.zIndex ? `z-index: ${props.zIndex}` : "")};

  &:hover {
    transition: all 0.5s;
    box-shadow:0 4px 5px rgba(0, 0, 0, 0.22);
    /* background-color: #23c8af; */
    color: white;
  }
  &:active {
    box-shadow: none;
    /* background-color: #23C8AF; */
    /* border-color: #23C8AF ; */
    color: #fff;
`;

export default Grid;
