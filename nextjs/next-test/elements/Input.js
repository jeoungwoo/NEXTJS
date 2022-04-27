import React from "react";
import styled from "styled-components";

// elements
import { Text } from "./index";

const Input = props => {
  const {
    width,
    height,
    margin,
    padding,
    radius,
    label,
    multiLine,
    type,
    placeholder,
    enterSubmit,
    _onChange,
    defaultValue,
    value,
    accept,
    login,
  } = props;

  const styles = {
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    radius: radius,
    defaultValue: defaultValue,
    value: value,
    accept: accept,
  };

  if (multiLine) {
    return (
      <>
        {label && <Text>{label}</Text>}
        <Textarea
          {...styles}
          rows={10}
          label={label}
          placeholder={placeholder}
          enterSubmit={enterSubmit}
          onChange={_onChange}
          value={value ? value : null}
          defaultValue={defaultValue ? defaultValue : null}
        />
      </>
    );
  }

  if (login) {
    return (
      <>
        {label && <Text>{label}</Text>}
        <loginInput
          {...styles}
          // value={value}
          label={label}
          type={type}
          placeholder={placeholder}
          enterSubmit={enterSubmit}
          onChange={_onChange}
          value={value ? value : null}
          defaultValue={defaultValue ? defaultValue : null}
        />
      </>
    );
  }

  return (
    <>
      {label && (
        <Text bold="500" color="#BBBBBB">
          {label}
        </Text>
      )}
      <ElInput
        {...styles}
        // value={value}
        label={label}
        type={type}
        placeholder={placeholder}
        enterSubmit={enterSubmit}
        onChange={_onChange}
        value={value ? value : null}
        defaultValue={defaultValue ? defaultValue : null}
      />
    </>
  );
};

Input.defaultProps = {
  width: "",
  height: "",
  margin: "",
  padding: "",
  radius: "",
  label: "",
  type: "text",
  value: "",
  multiLine: "",
  placeholder: "텍스트를 입력하세요",
  enterSubmit: () => {},
  _onChange: () => {},
  accept: "",
};

const ElInput = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  box-sizing: border-box;
  border: 1px solid #ffffff;
  border-bottom: 2px solid #bbbbbb;
  border-radius: ${props => props.radius};
  :focus {
    outline: none;
    color: #000000;
    border-bottom: 2px solid #4069d9;
  }
`;

const loginInput = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  box-sizing: border-box;
  border: 1px solid #ffffff;
  border-bottom: 1px solid #bbbbbb;
  border-radius: ${props => props.radius};
  :focus {
    outline: none;
    border-bottom: 1px solid #4069d9;
  }
`;

export default Input;
