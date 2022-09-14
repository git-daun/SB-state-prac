import "../styles.css";
import { useState } from "react";

const Input = ({ el }) => {
  //체크된 상태에 따라서 밑줄넣어주기
  //상태를 만들고 상태에 따라 class를 붙여주는방식?
  const [isCheck, setIsCheck] = useState(false);

  //함수가 필요해 isCheck를 관리해줄 함수
  const setting = (e) => {
    //console.log(e);
    setIsCheck(!isCheck);
  };
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" onChange={setting} />
        </td>
        <td className={isCheck ? "Line" : ""}>{el}</td>
      </tr>
    </>
  );
};

export default Input;
