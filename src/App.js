import React, { useState } from 'react'
import './App.css';

import { Person } from './components/Person'

const initialBirthdays = [
  { id: 0, name: 'Bertie Yates', age: 29, img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg' },
  { id: 1, name: 'Hester Hogan', age: 32, img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg' },
  { id: 2, name: 'Larry Little', age: 36, img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg' },
  { id: 3, name: 'Sean Walsh', age: 34, img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg' },
  { id: 4, name: 'Lola Gardner', age: 29, img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg' }
]

function App() {
  const [people, setPeople] = useState(initialBirthdays)
  
  const clearAll = () => {
    setPeople([])
  }

  const remove = id => {
    setPeople(old => old.filter(person => person.id !== id))
  }

  return (
    <div id='container'>
      <h1 id='title'>{people.length} birthdays today</h1>
      <div>
        {people.map(person => <Person key={person.id} {...person} remove={remove} />)}
      </div>
      <button id='mainbtn' onClick={() => clearAll()}>Clear All</button>
    </div>
  );
}

export default App;
