//회원가입 폼 :  이름, 생년월일, 국적, 자기소개

import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('name');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="name" />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>
      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>

          <option value="kr">Korea</option>
          <option value="us">America</option>
          <option value="en">England</option>
        </select>
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio} />
      </div>
    </div>
  );
};

export default Register;
