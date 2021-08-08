import React from 'react'
import { Link } from 'react-router-dom'

function NoProducts() {
    return (
        <div className="noProducts">
            No products found! 
            <Link to="/">Add products</Link> 
        </div>
    )
}

export default NoProducts
