import React from "react";

const Reviews = ({name, comment}) => {
    return(
        <section>
            <p className="reviewer-name">{ name }</p>
            <p className="text">{ comment }</p>
        </section>
    )
}
export default Reviews;
