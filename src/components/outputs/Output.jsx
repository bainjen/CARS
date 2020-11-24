import React, { useContext, useState } from "react";
import { CombineContext } from "../CombineContext";
import styled from "styled-components";

import ConfigSimulations from "./ConfigSimulations";
import CombineOptions from "./CombineOptions";

const Output = () => {
  const [chosenConfiguration, setChoseConfiguration] = useState();

  return (
    <>
      <CombineOptions setChoseConfiguration={setChoseConfiguration} />
      <ConfigSimulations configurationID={chosenConfiguration} />
    </>
  );
};

export default Output;
