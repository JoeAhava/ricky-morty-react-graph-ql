import React from "react";
import styled from "styled-components";

const Container = styled.section`
	margin: 0;
	padding: 0;
	width: 100vw;
	min-height: 100vh;
	background-color: ${(dark) => (dark ? "black" : "white")};
`;

export default function ThemedContainer(props) {
	return <Container>{props.children}</Container>;
}
