import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [resData, setResData] = useState([]);
  const [reqData, setReqData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/data');
        const _resData = res.data;
        setResData(_resData); // 새로운 상태를 생성하여 기존 데이터와 합침
      } catch (e) {
        console.error(e.message);
      }
    };
  
    fetchData(); // 비동기 함수를 호출하는 콜백 함수 정의 후, 바로 실행
  
  }, []); // 두 번째 인자인 빈 배열은 의존성 배열로, 이 useEffect는 마운트 시에 한 번만 실행됩니다.
  

  const submitTodo = e => {
    e.preventDefault();
    // let value = e.target.value;
    // console.log(e.target);
    // setReqData(value);

    fetch("http://localhost:8080/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: reqData
      })
    }).then(res => {
      if(res.ok) {
        alert("등록이 완료되었습니다.");
      }
    })
  }

  return (
    <div>
      <h1>헤공의 투두리스트</h1>
      <ul>
        {resData.map((item, index) => (
          // 각 항목을 리스트 아이템으로 만듭니다.
          <li key={index}>{item}</li>
        ))}
      </ul>

      <form>
        <input 
          type="text" 
          name="todo"
          placeholder="할 일을 적어주세요."/>
        <button onClick={submitTodo}>등록</button>
      </form>
    </div>
  );
}

export default App;
