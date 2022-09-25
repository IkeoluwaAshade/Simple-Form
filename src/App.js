import React, { useState } from 'react'

const App = () => {
  const [values, setValues] = useState({
    firstName: "",
    middleName: "",
    surName: "",
    email: "",
    age: "",
    gender: "",
  })

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState (false)

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handleMiddleNameInputChange = (event) => {
    setValues({...values, middleName: event.target.value})
  }

  const handleSurNameInputChange = (event) => {
    setValues({...values, surName: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handleAgeInputChange = (event) => {
    setValues({...values, age: event.target.value})
  }

  const handleGenderInputChange = (event) => {
    setValues({...values, gender: event.target.value})
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    if(values.firstName && values.middleName && values.surName && values.email && values.age && values.gender) {
      setValid(true);
    }
    setSubmitted(true);
  }
  


  return (
    <div className='formHolder'>
      <form className='register-form' onSubmit={handleSubmit}>
        {submitted && valid ?  <div className='success-message'>Success! Thank you for Registering</div> : null }
       


        <input onChange={handleFirstNameInputChange}
        value={values.firstName} className='form-field'
        placeholder='First Name'
        name="firstName"/>
        {submitted && !values.firstName ?  <span>Please enter your First Name</span> :null }
    
      
        <input onChange={handleMiddleNameInputChange}
        value={values.middleName}
        className='form-field'
        placeholder='Middle Name'
        name="middleName"/>
         {submitted && !values.middleName ? 
        <span>Please enter your Middle Name</span> :null }
    
     
        <input onChange={handleSurNameInputChange}
        value={values.surName}
        className='form-field'
        placeholder='Surname'
        name="Surname"/>
         {submitted && !values.surName ? <span>Please enter your Surname Name</span> :null}
      
 
        <input type={'email'}
        onChange={handleEmailInputChange}
        value={values.email}
        className='form-field'
        placeholder='Email'
        name="email"/>
        {submitted && !values.email ? <span>Please enter your Email </span> : null }


        <input type={'number'}
        onChange={handleAgeInputChange}
        value={values.age}
        className='form-field'
        placeholder='Age'
        name="age"/>
         {submitted && !values.age ? <span>Please enter your Age Name</span> :null }

        <input
         onChange={handleGenderInputChange}
         value={values.gender}
        className='form-field'
        placeholder='Gender'
        name="gender"/>
         {submitted && !values.sex ? <span>Please enter your Gender </span> :null }

        <button className='form-field'
        type='submit'>Register</button>
      </form>
    </div>
  )
}

export default App