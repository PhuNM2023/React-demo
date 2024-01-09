import React, {useEffect, useState} from 'react'
import PersonPoint from './PersonPoint';

function Person() {
    const [name, setName] = useState<string>("Hieu");
    const [age, setAge] = useState<number>(24);
    const [point, setPoint] = useState(1);
    const [finalPoint, setFinalPoint] = useState(point * 10);
    // const [emptyState, setEmptyState] = useState();
    const [destroyed, setDestroyed] = useState<boolean>(false)



    const handleChangeName = () => {
        setName("Nam")
    }

    const changePoint = () => {
        setPoint((prevState) => prevState + 1)
    }

    const changePointFinal = (point: number) => {
        setFinalPoint((prevState) => (prevState + point) * 10)
    }

    // Way 1 - run apter mounting
    useEffect(() => {
        // logic to run once after the component mounted
        console.log("componentDidMount");
    }, [])

    // Way 2 - run on every render
    useEffect(() => {
        // Logic to run after each render
        console.log("componentDidUpdate");
    });

    // Way 3 - run on dependency change
    useEffect(() => {
        // Logic to run when final point or point or age changed
        console.log("final point or point or age has changed!");
    }, [finalPoint, point, age]);

  return (
    <>
        <h2 style={{color: "blue"}}>
            My name is {name} and my age is {age}
        </h2>
        {!destroyed ? (
            <PersonPoint 
            point={point} 
            finalPoint={finalPoint}
            changePoint={changePoint}
            setPoint={changePointFinal} 
        />
        ) : null
        }
        

        <button className='btn btn-primary mr-2' onClick={handleChangeName}>Change name</button>
        <button className='btn btn-secondary' onClick={() => setAge(23)}>Change age</button>
    
        <button className='btn btn-danger m-2' onClick={() => setDestroyed((prevState) => !prevState)}>
            Toggle person point
        </button>
    
    </>
  )
}

export default Person   