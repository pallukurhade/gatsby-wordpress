import React from "react"
import {navigate} from "gatsby"
import Header from '../components/Header'

const Test = () => (
    <div>
    <Header title="Header of test"></Header>
     <h1>This is the test page!!</h1>
     <h3>Enjoy</h3>
     <button onClick={()=> navigate("/")}>Go Home</button>
    </div>
)


export default Test;