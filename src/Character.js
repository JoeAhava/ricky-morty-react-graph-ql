import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	padding: 1em;
	border-radius: 10px;
	border: 1px solid grey;
`;

const StyledTitle = styled.h1``;

export default function Character({ name, origin, species }) {
	return <StyledContainer></StyledContainer>;
}
