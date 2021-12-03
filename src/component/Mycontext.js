import React from "react";

const mycontext = React.createContext();

const DadaProvider = mycontext.Provider;
const PutiConsumer = mycontext.Consumer;

export { DadaProvider, PutiConsumer };
