import React from 'react';
import './Items.css'
const Items = ({data}) => {
  return (
    <div  className="row" style={{"display": "flex"}}>
        {data.map(data =>
            <div className="column" style={{"width": "80rem"}}>
                 <img src={data.recipe.image}/>
                 <h5>DISH:{data.recipe.label}</h5>
                 <p>Calories:{Math.round(data.recipe.calories)}</p>
            <div/>
            {/* <div className='name'>
                <h5>DISH:{data.recipe.label}</h5>
            </div>
            <div className='calories'>Calories:{data.recipe.calories}</div> */}
        </div>
        
        )}
    </div>
  )
}
export default Items;