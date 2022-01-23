import React from 'react'

const Button = ({children, isLoading, ...props}) => {
    return (
        <button disabled={isLoading ? true : false} {...props}>{isLoading ? 'Loading...' : children}</button>
    )
}

export default Button