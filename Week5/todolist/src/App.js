import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [resData, setResData] = useState([]);
  const [reqData, setReqData] = useState("");

  useEffect(() => {
    fetchData(); // 비동기 함수를 호출하는 콜백 함수 정의 후, 바로 실행
  }, []); // 두 번째 인자인 빈 배열은 의존성 배열로, 이 useEffect는 마운트 시에 한 번만 실행됩니다.
  
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/data');
      const _resData = res.data;
      setResData(_resData); // 새로운 상태를 생성하여 기존 데이터와 합침
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleChange = e => {
    setReqData(e.target.value)
  }
  const handleClick = async(e) => {
    e.preventDefault();
    try {
    const res = await axios.post('http://localhost:8080/api/data', {
      content: reqData
    });
    console.log(res);
    // DB 업로드 이후 리스트 다시 불러오기
    fetchData();
    // input value 비우기
    setReqData("");
    alert("등록이 완료되었습니다.");
    } catch(err) {
      console.log(err);
    }
  }

  const handleCheck = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.put('http://localhost:8080/api/data', {
        id : e.target.id,
        checked : e.target.checked
      });
      fetchData();
    } catch(err) {
      console.log(err);
    }
  }

  const handleDelete = async(e) => {
    e.preventDefault();
    console.log(e.target.id);
    try{
      const res = await axios.delete('http://localhost:8080/api/data', {
        data : {
          id : e.target.id
        } 
      });
      fetchData();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>헤공의 투두리스트</h1>
      <ul>
        {resData.map(item => (
          // 각 항목을 리스트 아이템으로 만듭니다.
          <li key={item.Id}>{item.Content}
          <input 
          type="checkbox"
          checked={item.Complete}
          id={item.Id}
          onChange={handleCheck}></input>
          <button id={item.Id} onClick={handleDelete}>삭제</button>
          </li>
        ))}
      </ul>

      <form>
        <input 
          type="text" 
          name="todo"
          onChange={handleChange}
          value={reqData}
          placeholder="할 일을 적어주세요."/>
        <button onClick={handleClick}>등록</button>
      </form>
    </div>
  );
}

export default App;
