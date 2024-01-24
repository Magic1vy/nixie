import { useState } from "react"

export const AccordionItem = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <div className={ isOpen ? "active" : "default"} onClick={handleIsOpen}>
                <span>{title}</span>
                <span className="accordion-icon">{isOpen ? '—' : '+'}</span>
            </div>
            {isOpen && <div className="content">
                {content}
            </div>}
        </>
    )
}
