import * as React from "react";

const CustomDot = ({ onClick, active, index, carouselState }) => {
  const { currentSlide } = carouselState;
  return (
    <li style={{ background: active ? "grey" : "red", position: 'absolute', bottom: '10px', width:'auto', height:'100px !important' }}>
      <button
        style={{ background: active ? "grey" : "red" }}
        onClick={() => onClick()}
      />
    </li>
  );
};

export default CustomDot;