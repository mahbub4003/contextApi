import React, { Component } from "react";
import Son from "./Son";
import { DadaProvider } from "./Mycontext";

class Dada extends Component {
  state = { theme: "dark" };

  render() {
    const { theme } = this.state;
    return (
      <div>
        <DadaProvider value="Dada sent massage to puti" theme={theme}>
          <Son />
        </DadaProvider>
      </div>
    );
  }
}

export default Dada;
