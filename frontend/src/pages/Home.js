import React from 'react'

function Home() {
    return (
        <div>
            <h1>Hello! Record and Review all your favorite recipes here :)</h1>
            <p>Please select a category.</p>
            <ul>
                <li>
                    <a href="/">Breakfast</a>
                </li>
                <li>
                    <a href="/">Lunch</a>
                </li>
                <li>
                    <a href="/">Dinner</a>
                </li>
            </ul>
        </div>
    )
}

export default Home