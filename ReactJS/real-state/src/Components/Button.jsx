import { useState } from "react";

function Button(props) {

    return (
        <div className="w-52 h-14 
                        flex justify-center items-center
                        bg-{var(--background-color-light-gray)}
                        shadow-border-2">
            <button className="w-full h-full">Click Me</button>
        </div>
    );
}
  
export default Button;