import React, { useState } from "react";
import styled from "styled-components";
import BoxComponent from "./BoxComponent";

const Container = styled.div`
  width: 290px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  const [allBox, setAllBox] = useState([
    {
      id: 1,
      color: "blue",
    },
    {
      id: 2,
      color: "blue",
    },
    {
      id: 3,
      color: "blue",
    },
    {
      id: 4,
      color: "blue",
    },
    {
      id: 5,
      color: "blue",
    },
    {
      id: 6,
      color: "blue",
    },
    {
      id: 7,
      color: "blue",
    },
    {
      id: 8,
      color: "blue",
    },
    {
      id: 9,
      color: "blue",
    },
    {
      id: 10,
      color: "blue",
    },
    {
      id: 11,
      color: "blue",
    },
    {
      id: 12,
      color: "blue",
    },
    {
      id: 13,
      color: "blue",
    },
    {
      id: 14,
      color: "blue",
    },
    {
      id: 15,
      color: "blue",
    },
    {
      id: 16,
      color: "blue",
    },
  ]);

  const [colors, setColors] = useState([]);

  const handleChangecolor = (e, num) => {
    if (colors.length <= 1) {
      let copy = [...allBox];
      copy[num].color = "red";
      setAllBox(copy);
      let colorCopy = [...colors];
      colorCopy.unshift(num);
      setColors(colorCopy);
    } else {
      let colorCopy = [...colors];
      let toChange = colorCopy.pop();
      console.log(colorCopy, "check1");
      colorCopy.unshift(num);
      setColors(colorCopy);
      let BoxCopy = [...allBox];
      BoxCopy[num].color = "red";
      BoxCopy[toChange].color = "blue";
      setAllBox(BoxCopy);
      //   setColors([...colors, num]);
    }
  };
  console.log(allBox, "box");
  console.log(colors, "color");

  return (
    <Container>
      {allBox.map((item, index) => (
        <BoxComponent
          color={item.color}
          key={index}
          handleChangecolor={handleChangecolor}
          num={index}
        />
      ))}
    </Container>
  );
};

export default Home;
