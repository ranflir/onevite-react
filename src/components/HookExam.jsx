/*
3가지 hook 관련된 팁
1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
2. 리액트 훅은 조건부로 호출될 수는 없다. > 조건문이나 반복문 x
3. 커스텀 훅을 직접 만들 수 있다. 
*/

import { useState } from 'react';
import useInput from './../hooks/useInput';

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useState();

  //useState는 반드시 함수내부에서 사용해야 한다.
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
