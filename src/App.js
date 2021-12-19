import React, { useContext } from "react";
import { Context } from "./context";
import ThemedContainer from "./ThemedContainer";

function App() {
	const ctx = useContext(Context);
	return (
		<ThemedContainer dark={ctx.dark}>
			<header>Hello</header>
		</ThemedContainer>
	);
}

export default App;
