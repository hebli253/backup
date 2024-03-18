import { useState } from "react";

const UseRefEx3 = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h2> preventDefault() 연습 </h2>
            <p> Click {count} times </p> 
            <p> 
                <a href="http://localhost:3000/"
                    onClick={(e)=>{
                        e.preventDefault();
                        setCount(count+1);
                    }}> Click </a>
            </p>      
        </>
    )
}

export default UseRefEx3;