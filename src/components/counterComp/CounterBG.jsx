import React, { useCallback, useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

const CounterBG = () => {
  const [counter, setCounter] = useState(() => {
    // yaha ham localstorage se data fetch karenge agar vo nahi hoga to 0 return karenge
    return Number(localStorage.getItem("CountData") || 0);
  });
  const handleIncrement = () => setCounter((counter) => counter + 1);
  const handleReset = () => setCounter(0);
  const handleDecrement = () =>
    counter > 0 ? setCounter((counter) => counter - 1) : setCounter(0);

  // useEffect for side operations it will run after component re render
  useEffect(() => {
    // yaha ham localstorage me data save karenge jab bhi vo change hoga
    localStorage.setItem("CountData", counter);
  }, [counter]);

  const backgroundColor = useSpring({
    background: `linear-gradient(to bottom, rgba(0,100,255,${Math.min(
      counter / 100,
      1
    )}), rgba(0,255,100,${Math.min(counter / 100, 1)}))`,
    config: { tension: 170, friction: 26, clamp: true },
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid black",
        borderRadius: "5px",
        width: "90%",
        height: "250px",
      }}
    >
      <animated.div
        style={{ ...backgroundColor, width: "100%", height: "100%" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            marginTop: "60px",
          }}
        >
          <Box sx={{ fontSize: "30px", textAlign: "center", margin: "10px 0" }}>
            Counter: {counter}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              style={{ width: "150px" }}
              onClick={handleIncrement}
              variant="contained"
            >
              Increment
            </Button>
            <Button
              style={{ backgroundColor: "red", color: "white", width: "150px" }}
              onClick={handleReset}
              variant=""
            >
              Reset
            </Button>
            <Button
              onClick={handleDecrement}
              style={{ width: "150px" }}
              variant="contained"
            >
              Decrement
            </Button>
          </Box>
        </Box>
      </animated.div>
    </Box>
  );
};

export default CounterBG;
