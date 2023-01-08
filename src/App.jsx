import Header from "./Components/Header"
import Meme from "./Components/Meme"

function App() {  

  return (
    <div className="App">      
        
   {/* MEMMORY LEAK---situation where a component is unmounted yet the browser is still listening to changes but can"t be able to update state in the component because it is unmounted.Technically it is outside the DOM. */}  
    {/*CASE IN POINT updating resized window in APP JS yet WindowTracker component is unmounted due to toggle button in the App JS  */}    


    {/* CLEAN UP function is used to clean side effect that a function may have caused.Usually it  a empty function returned from the function with effects  */}      

    {/* clean up function are usually run in the effect function  */}
           
      <Header />    
      <Meme   />              
    </div>   
  )
}

export default App
