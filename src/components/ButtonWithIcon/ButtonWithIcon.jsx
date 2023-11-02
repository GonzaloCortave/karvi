import React from "react"
import "./ButtonWithIcon.scss"

const ButtonWithIcon = ({ icon, onClick, children }) => (
    <button className="ButtonWithIcon" onClick={onClick}>
        <img src={icon} alt="Button icon" />
        {children}
    </button>    
)

export default ButtonWithIcon;