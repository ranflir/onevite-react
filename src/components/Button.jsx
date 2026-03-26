//props를 구조분해할당 문법으로 받아와서, props의 기본값 문법을 사용하면 된다.

const Button = ({ text, color = 'black' }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
    </button>
  );
};

export default Button;
