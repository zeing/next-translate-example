import * as React from 'react'

const EyeIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="prefix__bi prefix__bi-eye-fill"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
    </svg>
  )
}

export default EyeIcon
