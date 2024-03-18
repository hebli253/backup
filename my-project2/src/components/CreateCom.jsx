import { useRef } from "react";
import UseFetch from "./UseFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CreateCom(){
    //select 메뉴를 이용하여,
    //어느 날짜에 단어를 추가할지 설정하기 위해서 day 정보를 읽어준다.
    const coms = UseFetch(`http://localhost:3001/coms`);

    const history = useHistory();

    //입력된 단어 내용 저장, 
    const nameRef = useRef(null);
    const numRef = useRef(null);
    const comRef = useRef(null);
    const jobRef = useRef(null);
    const dateRef = useRef(null);

    const onSubmit = (e)=>{
        console.log(`(create_com) : onSubmit()`);
        console.log(`(create_com) : ${nameRef.current.value}`);

        e.preventDefault();
        fetch('http://localhost:3001/coms/', {
            method:'post',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({
                name:nameRef.current.value,
                num:numRef.current.value,
                job:jobRef.current.value,
                date:dateRef.current.value
            })
        })
        .then((res)=>{
            if(res.ok) {
                alert(`기업정보가 추가되었습니다.`);
                history.push(`/`);
            }
        })
    }

    return(
        <div className="create_form">
            <h2> 기업 추가 </h2>
            <form onSubmit={onSubmit}>
                <div className="input_area">
                    <label> 기업명 </label>
                    <input type="text" placeholder="예) 삼성전자" ref={nameRef} />
                </div>
                <div className="input_area">
                    <label> 채용 인원 </label>
                    <input type="text" placeholder="예) 30" ref={numRef} />
                </div>
                <div className="input_area">
                    <label> 직무 </label>
                    <input type="text" placeholder="예) 개발" ref={jobRef} />
                </div>

                <div className="input_area">
                    <label> 지원 기한 </label>
                    <input type="text" placeholder="예) 2024-01-01" ref={dateRef} />
                </div>
        
                <button> 저장 </button>
            </form>

        </div>
    )
}

export default CreateCom;