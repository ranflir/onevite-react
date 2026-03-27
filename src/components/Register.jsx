//회원가입 폼 :  이름, 생년월일, 국적, 자기소개

import { useState, useRef } from 'react';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });
  // const [name, setName] = useState('name');
  // const [birth, setBirth] = useState('');
  // const [country, setCountry] = useState('');
  // const [bio, setBio] = useState('');

  const countRef = useRef(0);
  const inputRef = useRef();

  // ref는 변화하는값을 기록하지만 화면에 랜더링되지는 않는다.

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === '') {
      //이름을 입력하는 DOM 요소에 포커스를 해줄것
      inputRef.current.focus();
    }
  };

  // const onChangeName = (e) => {
  //   // setName(e.target.value);
  //   setInput({
  //     ...input,
  //     // spread 연산자를 써야 다른거 안날아감.
  //     name: e.target.value,
  //   });
  // };

  // const onChangeBirth = (e) => {
  //   // setBirth(e.target.value);
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   });
  // };

  // const onChangeCountry = (e) => {
  //   // setCountry(e.target.value);
  //   setInput({
  //     ...input,
  //     country: e.target.value,
  //   });
  // };

  // const onChangeBio = (e) => {
  //   // setBio(e.target.value);
  //   setInput({
  //     ...input,
  //     bio: e.target.value,
  //   });
  // };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="name"
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>

          <option value="kr">Korea</option>
          <option value="us">America</option>
          <option value="en">England</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Register;
