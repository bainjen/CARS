import Field from "./components/Field";
import Auger from "./components/inputs/Auger";
import Fuel from "./components/inputs/Fuel";
import Wheels from "./components/inputs/Wheels";
import styled from "styled-components";

const InputDiv = styled.div`
  /* display: flex; */
  /* margin: 1em; */
`;

const AppDiv = styled.div`
  margin: 1em;
`;

function App() {
  return (
    <AppDiv>
      <InputDiv>
        <Auger />
        <Fuel />
        <Wheels />
      </InputDiv>
      <Field />
    </AppDiv>
  );
}

export default App;
