import React, { useState } from "react"

  /**
     * Challenge: Connect the form to local state
    
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    

export default function App() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: false
    })
    
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.confirmPassword) {
            alert("Successfully signed up")
            console.log("Successfully signed up")
        } else {
            alert("passwords do not match")
            console.log("passwords do not match")
        }

        if(formData.newsletter) {
            alert("Thanks for signing up for our newsletter")
            console.log("Thanks for signing up for our newsletter")
        } 
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        onChange={handleChange}
                        name="newsletter"
                        checked={formData.newsletter}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}