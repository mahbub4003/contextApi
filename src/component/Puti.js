import { PutiConsumer } from "./Mycontext";
export default function Puti({ theme }) {
  const style = (theme = "dark"
    ? { backgroundColor: "#000000", color: "#ffffff" }
    : null);

  return (
    <div style={style}>
      <h1>
        <PutiConsumer>
          {(msg) => {
            return msg;
          }}
        </PutiConsumer>
      </h1>
    </div>
  );
}
