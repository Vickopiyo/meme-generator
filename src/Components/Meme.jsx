import React, { useEffect, useState } from "react";
import memesData from "../Components/MemeData";

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

  const [meme, setMeme] = useState({
    toptext: "",
    bottomtext: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });        

    const [allMemes, setAllMemes]= useState([])


  useEffect(()=> {             

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */

          // async function getMemes(){
          //   const res = await fetch("https://api.imgflip.com/get_memes")
          //   const data = await res.json()  
          //   setAllMemes(data.data.memes)
          // }    

          // getMemes()   

          // return function(){
          //   // I AM A CLEAN UP FUNCTION
          // }
    


    fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())       
         .then(data => setAllMemes(data.data.memes))      
   },[])           
               
  
  function getMemeImage() {
    
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    //  Accessing random images (memes)
    const url = allMemes[randomNumber].url;

    //  You dont need to access previous state  so setMeme(memesArray[randomNumber].url) works fine

    // setMeme(   prevMeme =>  prevMeme = memesArray[randomNumber].url)         


    
    setMeme((prevstate) => ({ ...prevstate, randomImage: url }));   

  }             
        function handleChange(event ){ 
          
        const {name, value} =event.target   
         setMeme(prevForm => ({...prevForm, [name]: value }))

        }
 
  
  return (
    <section>
         
        <div className="form">
          <input
            type="text"
            className="form-input" 
            placeholder="Top Text"
            name="toptext"     
            value={meme.toptext} 
            onChange={handleChange}
            
            />
          <input 
           type="text"
           className="form-input" 
           placeholder="Bottom Text" 
           name="bottomtext"
           value={meme.bottomtext}
           onChange={handleChange}   


           />
          {/* No () because as soon as it renders it call the function.It should only work when clicked  */}
          <button    onClick = {getMemeImage}  className="form-btn ">
            Generate Meme
          </button>
        </div>
        <div className="meme">
          <img src={meme.randomImage} alt="meme!" />
          <h2  className="meme--text top">{meme.toptext}</h2>
          <h2  className="meme--text bottom">{meme.bottomtext}</h2>
        </div>
      
    </section>    
  );
};

export default Meme;
