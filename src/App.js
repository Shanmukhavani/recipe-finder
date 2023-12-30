
import { useState } from 'react';
import './App.css';
import Items from './components/Items';

function App() {
 const [search,setSearch] = useState('');
 const [data,setData] = useState([]);
 const YOUR_APP_ID ='cec4d280';
 const YOUR_APP_KEY="b81940bd8dbe5ff0eee6e985a9b686ff";	
 const submitHandler=(e)=>{
  e.preventDefault();
  //console.log(search);
  fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
    response => response.json()
  ).then(
    data => setData(data.hits) 
  )
 }
  return (
    <div className="App">
        <form onSubmit={submitHandler}>
            <div className="nav-bar">
                <div className='heading'>
                      RECIPE FINDER
                </div>
                
                <div className='input'>
                  <input  type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                </div>
                <div className='search'>
                    <button onSubmit={submitHandler}>Search</button>
                </div>
                
            </div>
          {data.length>1?<Items data={data}/>:null} 

        </form>
        {/* {data.length>1?<Items data={data}/>:null} */}

      {/* <form onSubmit={submitHandler}>
        <br/><br/>
        
      </form> */}
      
    </div>
  );
}

export default App;
