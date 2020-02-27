import React from 'react';



    
export default ({ninjas, deleteNinja}) => {
    var ninjaList = ninjas.map(ninja => {
        return (
            <div className='ninja' key={ninja.id}>
                <div> name : {ninja.name}</div>
                <div> belt : {ninja.belt}</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
            </div>
        )
    });
    return (
        <div className='ninja-list'>
            {ninjaList}
        </div>
    )

}
