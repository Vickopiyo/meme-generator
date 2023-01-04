import React from 'react' 
import data from "../Components/MemeData"

const Meme = () => {      
    
    // Props should always be immutable       
    // State(variables in a function)--values managed within a component which keeps changing    

    // NAME--equivalent props
      function greeting(name){ 
//    TIMEOFDAY--equivalent to State  

        const  date = new Date()
        const time = date.getHours()     
        let timeOfDay 
        if(time < 12 ){
            timeOfDay = "Good Morning"
        }else if(time >=12 && time < 19 ){
            timeOfDay = "Good Afternoon"
        } else {
            timeOfDay = "Good Evening"
        }    

        return `${timeOfDay} ${name} ` 
        
      }      


      console.log(greeting("Vick"))






//     const memes = data.map( meme => {      
//         return <Meme key={meme.id}  {...m
//       }) 
//    }       


function getMemeImage(){        

    console.log("Clicked")
}    
  
  return (    

    <section>
        <div  className='form'>    
            <input type="text"   className='form-input'  placeholder='Top Text' />  
            <input type="text"   className='form-input'  placeholder='Bottom Text' /> 
            {/* No () because as soon as it renders it call the function.It should only work when clicked  */}
            <button  onClick={getMemeImage} className='form-btn '>Generate Meme</button>  
        </div>    
    </section>    
  )
}   

export default Meme