import React from 'react'
import './App.css';

function List(props) {
  return (

      props.people.map((item, idx) => {
        const {id, name, age, image} = item;
        return <article key={id} className='person'>
          <img className='imeg' src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
            </div>
        </article>
      })

  )
}

export default List;
