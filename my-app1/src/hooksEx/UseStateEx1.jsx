import { useState } from "react";

const UseStateEx1 = () => {

    //일반변수
    let count1 = 0;
    //useState() 변수 선언
    const [count2, setCount2] = useState(0);

    console.log(`렌더링 --> `);
    return (
        // jsx 문법이 적용되는 영역
       <>
        <h2> useState() 연습 </h2>

        <p> click {count1} </p>
        <p> click {count2} </p>
        <button onClick={()=>{
            count1 ++;
            console.log(`count1 : ${count1}`);
        }}> click me(let) </button>

        <button onClick={()=>{
            setCount2(count2 +1);
            console.log(`count2 : ${count2}`);
        }}> click me(useState) </button>
        </>
    );
    
}

export default UseStateEx1;