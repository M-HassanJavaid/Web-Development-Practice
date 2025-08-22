import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/foooter/footer.jsx';
import Card from './components/card/card.jsx';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <main>
        <div id="card-container" style={{backgroundColor: 'yellow'}}>
          <Card title="Card 1" description="Card 1 description..."/>
          <Card title="Card 2" description="Card 2 description..."/>
          <Card title="Card 3" description="Card 3 description..."/>
          <Card title="Card 4" description="Card 4 description..."/>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
