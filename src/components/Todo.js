import React ,{useState} from 'react'


const Todo = () => {

  
    const[inputdata, setInputdata] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () =>{

      if(!inputdata){

      }
      else{
      
        setItems([...items,inputdata]);
        setInputdata('');
      }
      
    }

    const deleteItem= (id)=>{
        const updatedItems = items.filter((elem, index) =>{
          return index !== id;
        });
        setItems(updatedItems);
    }
  return (
   <>
    <div className='container p-3 my-5 col-lg-12 bg-light text-center m-t-10px height 20px '  >
        <div className='child-div'>
            <h1>To-do List</h1>
        </div>

        <div className='addItems p-5 ' id='addItems'>
            <input type="text" placeholder='Write items..' value={inputdata}
              onChange={  (e)=> setInputdata(e.target.value) } />

          
            <button class="btn btn-outline-success my-2 my-sm-0" onClick={addItem} id='addBtn'>Add</button>
            
        </div>

        <div className='showItems'>

            {
              items.map((elem, index) =>{
                return (
                     <div className='eachIem' key={index}>
                    
                     <p >{elem}</p>
                       
                         <span>
                         <button className='delete "btn btn-outline-secondary"'   title='Delete Item' onClick= {() => deleteItem(index)}>Delete</button>
                         </span>
                           
                         
                    </div>
                )
              })
            }
             
        </div>

       
    </div>

   </>
  )
}

export default Todo