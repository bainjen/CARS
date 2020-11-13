import Field from "./components/Field";
import Auger from "./components/inputs/Auger";
import Fuel from "./components/inputs/Fuel";
import Wheels from "./components/inputs/Wheels";
import styled from "styled-components";
import { CombineProvider } from "./components/CombineContext";

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
      <CombineProvider>
        <InputDiv>
          <Auger />
          <Fuel />
          <Wheels />
        </InputDiv>
        <Field />
      </CombineProvider>
    </AppDiv>
  );
}

export default App;
