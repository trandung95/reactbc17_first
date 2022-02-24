import React from 'react'

export default function DatabindingFunction() {
    const title = 'Tiêu đề'
    const renderTitle = () => {
        return <img src="https://i.pravatar.cc/100" alt="..." />
        
    }
    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{renderTitle()}</p>
        </div>
    )
}
