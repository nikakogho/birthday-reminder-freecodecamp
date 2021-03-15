import './Person.css'

export const Person = ({ id, name, age, img, remove }) => {
    return <div className='person'>
        <img src={img} alt='smh' />
        <div>
            <h2>{name}</h2>
            <h3>{age} years</h3>
        </div>
        <div className='right'>
           <button onClick={() => remove(id)}>X</button>
        </div>
        </div>
}