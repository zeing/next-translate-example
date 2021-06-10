import EyeIcon from 'icons/eye'
import Warning from 'icons/warning'
import React, { useState } from 'react'

const Input = React.forwardRef(({ id, label, errors, message, type }, ref) => {
  const [visible, setVisible] = useState(false)

  const toggleVisiblePassword = () => {
    setVisible((prev) => !prev)
    let input = document.getElementById(id)
    if (input.type === 'password') {
      input.type = 'text'
    } else {
      input.type = 'password'
    }
  }

  return (
    <div className="mb-8 space-y-3">
      <div className="relative my-2 border-b-2 focus-within:border-primary">
        <input
          id={id}
          className="block w-full appearance-none focus:outline-none bg-transparent"
          type={type}
          placeholder=" "
          ref={ref}
        />

        <label
          htmlFor="username"
          className="absolute top-0 duration-300 origin-0 -z-1 select-none"
        >
          {label}
        </label>

        {errors[id]?.type === 'required' ? (
          <Warning
            color="#EF3526"
            className="absolute top-0 right-0 duration-300 origin-0"
          />
        ) : (
          type === 'password' && (
            <EyeIcon
              onClick={toggleVisiblePassword}
              className="absolute top-0 right-0 duration-300 origin-0"
              color={visible ? '#1A56F0' : '#3C414D'}
            />
          )
        )}
      </div>
      <p className="text-12 text-red-400">
        {errors[id]?.type === 'required' && message}
      </p>
    </div>
  )
})
export default Input
