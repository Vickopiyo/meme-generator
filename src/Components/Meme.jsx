import React, { useState } from 'react' 
import memesData from "../Components/MemeData"

const Meme = () => {      
    
    // Props should always be immutable       
    // State(variables in a function)--values managed within a component which keeps changing   
        
    //   const [count, setCount]= useState(0)     

    // NEVER!! -- setCount( count++(count = count + 1) )--Reason ? it modifies state directly..similar to state.map() 
      
    //  NB : ALWAYS UPDATE STATE USING THE SETTER FUNCTION 
    
    // BEST Practice for updating state is through callback func => setCount(prevCount => prevCount + 1)  

    // NAME--equivalent props
    
    //   function greeting(name){   

          //TIMEOFDAY--equivalent to State  

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
             
       
    //     UPDATING AN ARRAY STATE ALWAYS USE THE SPREAD OPERATOR TO AVOID DIRECT MUTATION  

    // .push mutates state directly which is against principle of state  

    // const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    // function addItem() {
    //     // We'll work on this next
    //     setThingsArray(prevThingsArray => {
    //     return     [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]})   
    // } 
    
    // const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)


//     const memes = data.map( meme => {      
//         return <Meme key={meme.id}  {...m
//       }) 
//    }            




//   UPDATING  AN OBJECT STATE         

// const [contact, setContact] = React.useState({
//   firstName: "John",
//   lastName: "Doe",
//   phone: "+1 (719) 555-1212",
//   email: "itsmyrealname@example.com",
//   isFavorite: true
// })         

   
// func triggered when  star icon in contact is clicked(changes fav to true or false)

// function toogleFavorite(){   

//    setContact( prevState =>   {

//    return   {...prevState, isFavorite : !prevState.isFavorite}     
    // }     

    //  OR if object return is a oneliner then wrap is paranthesis    ({...prevState, isFavorite : !prevState.isFavorite})
    // 1st Braces {} are interpreted as function body  
//       )
// }     
   
// colors  used on the icon  when icon    

// let starIcon = isFavorite ? "yellow.png"  : "empty.png"

// <img 
// src={`../images/${starIcon}`} 
// className="card--favorite"
// onClick={toggleFavorite}
// />



 const [meme, setMeme]= useState({ 

  toptext: "",
  bottomtext: "",
  randomImage: "http://i.imgflip.com/1bij.jpg"    

 })    


function getMemeImage(){         
    
         const memesArray = memesData.data.memes   

         const randomNumber = Math.floor(Math.random()*memesArray.length)      

          //  Accessing random images (memes) 
         const url =  memesArray[randomNumber].url 

        //  You dont need to access previous state  so setMeme(memesArray[randomNumber].url) works fine 

        // setMeme(   prevMeme =>  prevMeme = memesArray[randomNumber].url)     

          setMeme((prevstate )  => ({...prevstate,   randomImage: url }))     
}            

    //  callback in setState is when there is need to access prevstate before updating.Common use is toggling(true to false or false to true) setState( prevState => !prevState )
            
  return (    

    <section>
        <div  className='form'>                

            <input type="text"   className='form-input'  placeholder='Top Text' />  
            <input type="text"   className='form-input'  placeholder='Bottom Text' /> 
            {/* No () because as soon as it renders it call the function.It should only work when clicked  */}
            <button  onClick={getMemeImage} className='form-btn '>Generate Meme</button> 
        </div>    
        <div className="meme">                
        <img  src={meme.randomImage}   alt="meme!"  />   
        </div>     
    </section>    
  )         
}                   

export default Meme                    