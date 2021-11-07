import React from 'react'

const Button = ({ texto='Moderfok', color = '#00FF00' }) => {
    return (
        <button style={{backgroundColor: color}} className="button">
            { texto }
        </button>
    )
}

export default Button;
