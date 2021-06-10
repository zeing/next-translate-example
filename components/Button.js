import React from 'react'
import classnames from 'classnames'
import { forwardRef } from 'react'

const Button = forwardRef((props, ref) => {
  const {
    children,
    type = 'button',
    block = false,
    onClick,
    className = '',
    loading = false,
    color = 'primary',
    variant = 'fill',
    disabled,
    ...rest
  } = props

  const classButton = classnames(
    variant == 'fill' &&
      color == 'primary' &&
      'bg-primary hover:bg-primary-hover active:bg-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-inset text-white disabled:bg-gray-400',
    variant == 'outlined' &&
      color == 'primary' &&
      'bg-white text-primary hover:text-primary-500 hover:border-primary-500 border border-primary active:bg-gray-200 focus:ring-2 focus:ring-primary-500 focus:ring-inset disabled:bg-white disabled:border-gray-400 disabled:text-gray-400',
    variant == 'outlined' &&
      color == 'gray' &&
      'bg-white text-black hover:bg-gray-100 border border-gray-400 active:bg-gray-200 focus:ring-2 focus:ring-primary-500 focus:ring-inset disabled:bg-white disabled:text-gray-400'
  )

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classnames(
        { 'block w-full': block },
        classButton,
        'relative rounded h-8',
        { 'cursor-not-allowed': disabled },
        className
      )}
      {...rest}
    >
      {loading ? (
        <>
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              className="text-primary w-7 h-7 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
          <div className={classnames({ 'opacity-0': loading })}>{children}</div>
        </>
      ) : (
        children
      )}
    </button>
  )
})

export default Button
