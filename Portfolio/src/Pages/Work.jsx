'use client';

import React, { useEffect, useState } from "react"
import Lenis from 'lenis/react'
import '../style/Work.css'
import Header from "../component/Header"
import Title from "../component/Work-Title"
import Grid from "../component/Work-Grid"

function WorkPage() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    return (
        <Lenis root>
            <div className="Page">
                {<div className={`overlay ${!loading ? 'hidden' : ''}`}></div>}
                <Header />
                <Title />
                <Grid />
            </div>
        </Lenis>
    )
}

export default WorkPage