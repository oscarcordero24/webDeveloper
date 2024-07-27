import './App.css';
import Textbox from './Components/Textbox';

function App() {
  return (
    <div className='w-500px'>
      <Textbox inputType={'text'} iconName={'home-outline'} placeHolder={'Enter Text'} id={'my-textbox'}/>
    </div>
  );
}

export default App;
