import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true
        }
    )
    
    function handleChange(event) {               
    
        const {name, value, type, checked} = event.target  

        setFormData(prevFormData => {
            return {    
                ...prevFormData,   
                // checks which input is changed....name is bracketted to change it to object key(COMPUTED PROPERTY)  
                [name]: type === "checkbox" ? checked : value
            }
        })
    }    
    // VALUE---MUST BE added to make the form controlled..To main single source of truth(JAVASCRIPT)    
    // NAME--for references in the javascript  
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />   


            {/* controlling checkboxes in react */}
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}  
                name = "isFriendly"

            />  

            {/* HTMLFor references the input with similar id */}   
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
        </form>
    )
}
