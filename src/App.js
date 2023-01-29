import data from './data'
import Card from './Card/Card'
import './index.css'
import { FaGlobeAsia } from 'react-icons/fa'

const App = () => {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <p className="header-title"><FaGlobeAsia />my travel journal.</p>
      </header>

      <main>
        {cards}
      </main>

    </div>
  );
}

export default App;
