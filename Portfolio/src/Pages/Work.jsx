'use client';

import React, { useEffect, useState } from "react"
import Lenis from 'lenis/react'
import '../style/Work.css'
import Header from "../component/Header"
import Title from "../component/Work-Title"
import GridAll from "../component/Work-Grid-All"
// import GridFront from "../component/Work-grid-Front"

function WorkPage() {
    const [loading, setLoading] = useState(true)
    const [activeGrid, setActiveGrid] = useState('all')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500)

        return () => clearTimeout(timer)
    }, [])

    const handleGridChange = (button) => {
        if (button === 'FRONT') {
            setActiveGrid('front')
        } else {
            setActiveGrid('all')
        }
    }

    return (
        <Lenis root>
            <div className="Page">
                {<div className={`overlay ${!loading ? 'hidden' : ''}`}></div>}
                <Header />
                <Title onButtonClick={handleGridChange} />
                <GridAll />
            </div>
        </Lenis>
    )
}

export default WorkPage