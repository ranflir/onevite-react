import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Button from './components/Button';

//vite로 만든 리액트 앱에서는 확장자를 안써도 자동으로 파일을 찾아가도록 내부적으로 자동설정이 되어 있기 때문
function App() {
  return (
    <>
      <Button text={'mail'} color={'red'} />
      <Button text={'cafe'} />
      <Button text={'blog'} />
    </>
  );
}

export default App;

//왜 안되는데!!!!
