import "./style.css";
import { list } from "./list";
import { AccordionItem } from "./AccordionItem";

export const Accordion = () => {
    return (
        <div className="accordion-component"> 
        <h1 className="heading">FAQ</h1>
        <p className="text ">If you have any questions, please browse through the section below.</p>
        <div>
            {list.map((item, index ) => 
            <AccordionItem key={index} 
                            title={item.title}
                            content={item.content} />
                        )}
            </div>
        </div>
    )
}