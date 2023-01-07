import React, { useState } from 'react' 
import memesData from "../Components/MemeData"

const Meme = () => {           
                    
    // Props should always be immutable       
    // State(variables in a function)--values managed within a component which keeps changing   

    // change of state triggers rerendering Component where it is declared and any children component it has.Point to note it does not affect components above it or Component that doesnt depend on the state.
        
    //   const [count, setCount]= useState(0)     

    // NEVER!! -- setCount( count++(count = count + 1) )--Reason ? it modifies state directly..similar to state.map() 
      
    //  NB : ALWAYS UPDATE STATE USING THE SETTER FUNCTION  

    // State should be kept as local as possible(closer to the component that needs it..)
    
    // ALWAYS think fast which Component will need the state before declaring it

    // BEST Practice for updating state is through callback func => setCount(prevCount => prevCount + 1)    

    // Change of state ALWAYS cause rerender ...React renders APP component first then if state is passed to another component it triggers another render of the component state was passed as a prop.    


    // CONDITIONAL RENDERING 
    //  &&---RENDERS SOMETHNG OR NOT 
    // ?--- CHOOSE btw Rendering TWO things  
    // if-...else if.. else/  switch statements ---More than TWO options to render..
    //  && and ? ARE be written directly in the JSX        
    // if..else  if..else CANNOT BE WRITTEN inside JSX



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

    // .push/.concat  mutates state directly which is against principle of state  

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
//   firstName: "Vick",
//   lastName: "Opiyo",
//   phone: "0701341969",
//   email: "opiyookoth2016@gmail.com",          
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
      // COMPUTED PROPERTY --ability to turn a string to a key of an object.i.e const str = "Name"  therefore const student = {[str]: "Vick" }


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