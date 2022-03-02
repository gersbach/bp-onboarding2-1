import './App.css';
import { AButton } from './ButtonComponent/Button'

function App() {
  return (
    <div>
      <header className="Background">
        <AButton
          text='LOG IN'
          buttonType='button-clear'
          textType='button-text-white'
          onPress={() => console.log("I'm the first button.")}
        />
        <AButton
          text='CONTINUE'
          buttonType='button-green'
          textType='button-text-white'
          onPress={() => console.log("I'm the second.")}
        />
        <AButton
          text='SKIP'
          buttonType='button-white'
          textType='button-text-grey'
          onPress={() => console.log("Third.")}
        />
        <AButton
          text='ONCE A DAY'
          buttonType='button-clearAlt'
          textType='button-text-green'
          onPress={() => console.log("Hello! I'm the last button!")}
        />
      </header>
    </div>
  );
}

export default App;
