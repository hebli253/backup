//UseRefEx2 함수형 컴포넌트
import { useRef } from "react";


const UseRefEx2 = () => {
    const inputRef = useRef();

    console.log('렌더링 --> ');

    return (
        //jsx 문법
        <>
            <h2> UseRefEx2 (UseRef()를 이용한 input 태그 접근) </h2>
            <input type="text" placeholder="사용자 이름 입력" ref={inputRef}></input>
            <br></br>
            <button onClick={()=>{
                console.log(inputRef);
                alert(`Welcome ${inputRef.current.value}`);
            }}>확인</button>
        </>
    )
}

export default UseRefEx2;

