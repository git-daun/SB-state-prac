import "./styles.css";
import Input from "./component/Input";
export default function App() {
  const arr = ["하이", "바이"];

  return (
    <div className="App">
      <h2>버튼스타일 state로 관리하기</h2>

      <table style={{ margin: "auto" }}>
        <tbody>
          {arr.map((el, key) => {
            return <Input key={key} el={el} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
