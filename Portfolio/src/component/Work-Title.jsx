import React, { useState } from "react"
import '../style/Work-Title.css'

function WorkTitle() {
    const [selectedButton, setSelectedButton] = useState('ALL')

    const handleButtonClick = (button) => {
        setSelectedButton(button)
    }

    return (
        <div className="Title">
            <h1>works</h1>
            <div>
                <form className="Form">
                    <ul>
                        <li>
                            <button
                                className="Form-button ALL"
                                type="button"
                                style={{ opacity: selectedButton === 'ALL' ? 1 : 0.6 }}
                                onClick={() => handleButtonClick('ALL')}
                            >ALL</button>
                        </li>
                        <li>
                            <button
                                className="Form-button FRONT"
                                type="button"
                                style={{ opacity: selectedButton === 'FRONT' ? 1 : 0.6 }}
                                onClick={() => handleButtonClick('FRONT')}
                            >FRONT</button>
                        </li>
                        <li>
                            <button
                                className="Form-button BACK"
                                type="button"
                                style={{ opacity: selectedButton === 'BACK' ? 1 : 0.6 }}
                                onClick={() => handleButtonClick('BACK')}
                            >BACK</button>
                        </li>
                        <li>
                            <button
                                className="Form-button WEBGL"
                                type="button"
                                style={{ opacity: selectedButton === 'WEBGL' ? 1 : 0.6 }}
                                onClick={() => handleButtonClick('WEBGL')}
                            >WEBGL</button>
                        </li>
                        <li>
                            <button
                                className="Form-button DESIGN"
                                type="button"
                                style={{ opacity: selectedButton === 'DESIGN' ? 1 : 0.6 }}
                                onClick={() => handleButtonClick('DESIGN')}
                            >DESIGN</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default WorkTitle