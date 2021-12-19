import React, { createContext } from "react";

export const Context = createContext({
	dark: false,
});

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
