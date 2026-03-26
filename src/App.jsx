import './App.css';
import { useState } from 'react';

function App() {
  //스테이트값(초기값), 스테이트의 값을 변경하는 상태변화 함수 > (비구조화 할당)구조분해할당으로 표현
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === 'ON' ? 'OFF' : 'ON');
          }}
        >
          {/* light ON/OFF BUTTON */}
          {light === 'ON' ? 'LIGHT OFF' : 'LIGHT ON'}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {' '}
          +{' '}
        </button>
      </div>
    </>
  );
}
export default App;

// import Footer from './components/Footer';
// import Header from './components/Header';
// import Main from './components/Main';
// import Button from './components/Button';

// //vite로 만든 리액트 앱에서는 확장자를 안써도 자동으로 파일을 찾아가도록 내부적으로 자동설정이 되어 있기 때문
// function App() {
//   const buttonProps = {
//     text: 'mail',
//     color: 'red',
//     a: 1,
//     b: 2,
//     c: 3,
//   };

//   return (
//     <>
//       <Button {...buttonProps} />
//       <Button text={'cafe'} />
//       <Button text={'blog'}>
//         <Header />
//       </Button>
//     </>
//   );
// }
// export default App;

//왜 안되는데!!!! //된다 이제

/*
이벤트 핸들링

웹 내부에서 발생하는 사용자의 행동
> 버튼클릭, 메세지 입력, 스크롤 등

> 이벤트가 발생했을 때 그것을 처리하는 것
버튼 클릭시 경고창 노출

*/
