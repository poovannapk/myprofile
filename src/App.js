import "./App.css";
import styled from "styled-components";
import Sidenavbar from "./components/sidenavbar";
import Maincomponent from "./components/maincomponent";
import { Outlet} from "react-router-dom";

function App() {
  return (
      <Container>
        <Card>
          <Sidenavbar />
          <Outlet />
          <Maincomponent />
        </Card>
      </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #ceefe4, #d9d9f3);
`;

const Card = styled.div`
  display: flex;
  height: 90vh;
  width: 80vw;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

export default App;
