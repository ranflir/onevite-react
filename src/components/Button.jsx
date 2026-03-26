//props를 구조분해할당 문법으로 받아와서, props의 기본값 문법을 사용하면 된다.

//이벤트 객체

const Button = ({ children, text, color = 'black' }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;


//cross browsing issue 브라우져 별 스펙이 달라 발생하는 문제
//Synthetic Event 모든 브라우저에서의 이벤트 객체를 하나로 통일한 형태


//state 상태 : 전구(on/off)
// re-rendering