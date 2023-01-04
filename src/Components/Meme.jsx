import React, { useState } from 'react' 
import memesData from "../Components/MemeData"

const Meme = () => {      
    
    // Props should always be immutable       
    // State(variables in a function)--values managed within a component which keeps changing   
        
    //   const [count, setCount]= useState(0)     

    // NEVER!! -- setCount( count++(count = count + 1) )--Reason ? it modifies state directly    
    // BEST Practice for updating state is through callback func => setCount(prevCount => prevCount + 1)
    // NAME--equivalent props
    
    //   function greeting(name){ 
    // //TIMEOFDAY--equivalent to State  
           
    //     const  date = new Date()  

    //     const time = date.getHours()     

    //     let timeOfDay  

    //     if(time < 12 ){
    //         timeOfDay = "Good Morning"
    //     }else if(time >=12 && time < 19 ){
    //         timeOfDay = "Good Afternoon"
    //     } else {
    //         timeOfDay = "Good Evening"
    //     }    

    //     return `${timeOfDay} ${name} ` 

    //   }      

    //   console.log(greeting("Vick"))


//     const memes = data.map( meme => {      
//         return <Meme key={meme.id}  {...m
//       }) 
//    }         
     const [meme, setMeme]= useState("")       

function getMemeImage(){      
    
         const memesArray = memesData.data.memes 
         const randomNumber = Math.floor(Math.random()*memesArray.length)    
        //  You dont previous state though so  setMeme(memesArray[randomNumber].url) works fine 

        setMeme(prevMeme =>  prevMeme = memesArray[randomNumber].url) 
}            

    //  callback in  setState is when there is need to access prevstate before updating.Common use is toggling(true to false or false to true) 
            
  return (    

    <section>
        <div  className='form'>    
            <input type="text"   className='form-input'  placeholder='Top Text' />  
            <input type="text"   className='form-input'  placeholder='Bottom Text' /> 
            {/* No () because as soon as it renders it call the function.It should only work when clicked  */}
            <button  onClick={getMemeImage} className='form-btn '>Generate Meme</button> 
        </div>    
        <div className="meme">  
        <img  src={meme}   alt="meme!"  />   
        </div> 
    </section>    
  )
}                   

export default Meme