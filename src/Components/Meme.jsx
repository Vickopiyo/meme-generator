import React from 'react'

const Meme = () => {
  return (
    <section>

        <form    className='form'>    

            <input type="text"   className='form-input'   placeholder='Top Text' />  
            <input type="text"   className='form-input'  placeholder='Bottom Text' /> 
            <button  className='form-btn '>Generate Meme</button>
        </form>

      
             
    </section>
  )
}

export default Meme