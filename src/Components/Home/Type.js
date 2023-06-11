import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["FullStack Developer", "PSEB Certified Cloud Solution Architect", "Softaware Engineer", "Problem Solver"],
        autoStart: true,
        loop: true,
        deleteSpeed: 80
      }}
    />
  );
}

export default Type;
