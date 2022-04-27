import React from "react";
import styled from "styled-components";

const Container = props => {
  const { margin, cursor, children, maxWidth, bg, center, mainFlex } = props;
  const styles = { margin, cursor, maxWidth, bg, center, mainFlex };
  return (
    <React.Fragment>
      <ElContainer {...styles}>{children}</ElContainer>
    </React.Fragment>
  );
};

Container.defaultProps = {
  children: null,
  margin: "",
  cursor: "",
  center: "",
  mainFlex: "",
};

const ElContainer = styled.div`
  max-width: ${props => props.maxWidth};
  width: ${props => props.width};
  margin: ${props => props.margin};
  cursor: ${props => props.cursor};
  ${props => (props.bg ? `background-color : ${props.bg}` : "")};
  ${props => (props.center ? `text-align: center;` : "")};
  ${props => (props.mainFlex ? `display : flex; align-items : center ;` : "")};
`;

export default Container;
