import React from 'react'

export const generic = ({ pageContext }) => {
    return (
        <div>
            <h1>{pageContext.title}</h1>
            <p>{pageContext.pageText}</p>
        </div>
    )
}

export default generic;