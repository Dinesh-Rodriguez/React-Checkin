import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1> Hello Vishwas </h1>
    //     </div>
    // )

    return React.createElement('div', null, <h1>Hello Vishwa</h1>)
}

export default Hello