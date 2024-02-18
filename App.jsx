import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/card"
import data from "./data.js"

export default function App() {

    const cards = data.map(card => {
        return(
            <Card 
                key = {card.id}
                img = {card.coverImg}
                rating = {card.stats.rating}
                reviewCount = {card.stats.reviewCount}
                location = {card.location}
                title = {card.title}
                price = {card.price}
            />
        )
    })

    return(
        <div>
            <Navbar />
            <Hero />
            <section className="list-items">{cards}</section>
        </div>
    )
}