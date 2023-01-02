import './App.css';
import Testimonials from './Comp/testy.jsx';
function App() {
  return (
    <div className="App">
      <div className='app_titleAndTestContainer'>
        <h1 className='app_title'>Holo live sentences</h1>
        <Testimonials 
        name='Usada Pekora'
        rank='War Criminal'
        desc="Hiya-peko! Hiya-peko! Hiya-pekooo! I'm Usada Pekora, peko!"
        pic='pekora' />
        <Testimonials 
        name='Inugami Korone'
        rank='Doggo (and variants)'
        desc="Ello! Fingers! Give me your fingers!"
        pic='korone' />
        <Testimonials 
        name='Gawr Gura'
        rank='Dum shark'
        desc="Sometimes in life, you try to hit life with a 'hui-tcha', but then life decides to hit you with a 'hui-tcha.' Do you know what you do in this predicament, when life hui-tcha's you? You go AGAIN!"
        pic='gura' />
      </div>      
    </div>
  );
}

export default App;
