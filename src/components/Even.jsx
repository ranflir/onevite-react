import { useEffect } from 'react';

const Even = () => {
  useEffect(() => {
    //useEffect의 콜백함수가 반환하는 함수를 클린업, 정리함수라고 부른다. 정리함수는 useEffect가 끝날때 실행된다
    return () => {
      console.log('unmount');
    };
  }, []);
  return <div>This is Even</div>;
};

export default Even;
