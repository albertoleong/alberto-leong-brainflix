import './App.scss';
import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
    <Header />
    <Hero />
    <main className='main'>
      <Description />
    </main>
    </>
  );
}

export default App;
