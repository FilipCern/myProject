import React from "react";

function Detail({ name, hobbies }) {
    return (
        <div className="detail">
            <h2>Person Details</h2>
            <p>Name: {name}</p>
            
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>


        </div>
    );
}

/* const Detail = () => {
    return 
}
*/

export default Detail;