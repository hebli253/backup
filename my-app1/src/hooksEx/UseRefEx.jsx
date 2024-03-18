import { useRef, useState } from "react";

const UseRefEx = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0); //countRef={current:0}

    console.log(`렌더링 중 --> count : ${count}, countRef : ${countRef} `);

    return(
        <>
            <h2> useRef() 연습 </h2>
        
            <p> count : {count} </p>
            <p> countRef : {countRef.current} </p>
            <button onClick={() => {
                setCount(count +1);
            }}> count Inc(useState) </button>
            <button onClick={() => {
                countRef.current ++;
                //리렌더링이 일어나지 않으므로 여기에서 출력해봄
                console.log(`countRef : ${countRef}`);
            }}> count Inc(useState) </button>
        </>
    )
}


export default UseRefEx;