import React from 'react'

export default function Register({handleSubmit}) {
    return (
        <div className="register">
          <h2>Register</h2>
          <form onSubmit={(e) => {
            e.preventDefault()
            const form = e.target.elements
            const email = form.email.value
            const password = form.password.value

            if(email === '' || password === '') {
                alert('please fill out the form')
                return;
            }

            e.target.reset()
            handleSubmit(email, password)
          }}>
            <p>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email"/>
            </p>

            <p>
              <label htmlFor="password">Password: </label>
              <input type="password" name="password"/>
            </p>

            <p>
              <input type="submit" value="Login"/>
            </p>
          </form>
      </div>
    )
}