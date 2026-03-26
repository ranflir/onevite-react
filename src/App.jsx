import './App.css';
import { useState } from 'react';
import Bulb from './components/Bulb';
import Counter from './components/Counter';

/*
1. 자신이 관리하는 state의 값이 리랜더링 되었을때
2. 자신이 제공받는 props 값이 변경되었을때, 리랜더링
3. 부모컴포넌트가 리랜더링되면, 자식도 리랜더링이 된다.
*/

function App() {
  //스테이트값(초기값), 스테이트의 값을 변경하는 상태변화 함수 > (비구조화 할당)구조분해할당으로 표현
  return (
    <>
      <Bulb />

      <Counter />
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
