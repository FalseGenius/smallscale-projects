import React, {useState} from 'react';
import data from './data';
import List from './list';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">
      <main>
        <section className='container'>
          <h3>{people.length} birthdays</h3>
          <List people={people}/>
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>

      </main>
    </div>
  );
}

export default App;
