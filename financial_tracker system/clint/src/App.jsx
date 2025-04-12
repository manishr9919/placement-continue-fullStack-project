import "./App.css";
import { Button, HStack } from "@chakra-ui/react";

function App() {

const hendleclick = ()=>{
  alert("Wellcome-user")
}

  return (
    <>
      <HStack>
        <Button onClick = {hendleclick}>Click me</Button>
      </HStack>
    </>
  );
}

export default App;
