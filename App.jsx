import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/card"

export default function App() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                location="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}