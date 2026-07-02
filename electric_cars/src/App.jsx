import { useState } from "react";
import Routing from "./Routing/Routing";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";

import GeminiChat from "./components/GeminiChat/GeminiChat.jsx";

function App() {
  return (
    <>
      <Routing />
      <div>
        <WhatsappButton />
        <GeminiChat />
      </div>
    </>
  );
}

export default App;
