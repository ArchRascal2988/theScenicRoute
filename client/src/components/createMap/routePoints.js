import React from 'react';

const routePoints = ({ coordinates }) =>{

    if(!coordinates.length){
        return <h3>Waiting for Route Data...</h3>
    }

    return(
        <div>
            <h3>Route Points</h3>
            <div>
                {coordinates.map((element)=>(
                    <div>
                        <h4>{element.geometry}</h4>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default routePoints