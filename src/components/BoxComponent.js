import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 70px;
  height: 25px;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;

const BoxComponent = ({ color, handleChangecolor, num }) => {
  //   console.log(key, "jjjjj");
  return <Box color={color} onClick={(e) => handleChangecolor(e, num)}></Box>;
};

export default BoxComponent;
