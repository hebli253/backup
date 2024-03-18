import { useRef } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";

function CreateWord(){
    //select 메뉴를 이용하여,
    //어느 날짜에 단어를 추가할지 설정하기 위해서 day 정보를 읽어준다.
    const days = UseFetch(`http://localhost:3001/days`);
    //단어가 추가된 날짜로 이동하기 위해서, useHistory()를 사용
    const history = useHistory();
    //입력된 단어 내용 저장, 
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    const onSubmit = (e)=>{
        console.log(`(create_word) : onSubmit()`);
        e.preventDefault();
        fetch('http://localhost:3001/words/', {
            method:'post',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({
                day:dayRef.current.value,
                eng:engRef.current.value,
                kor:korRef.current.value,
                isDone:false,
            })
        })
        .then((res)=>{
            if(res.ok) {
                alert(`단어가 잘 추가되었습니다.`);
                history.push(`/word/${dayRef.current.value}`);
            }
        })
    }

    return(
        <div className="create_form">
            <h2> 단어 추가(CreateWord) </h2>
            <form onSubmit={onSubmit}>
                <div className="input_area">
                    <label> Eng </label>
                    <input type="text" placeholder="예) computer" ref={engRef} />
                </div>
                <div className="input_area">
                    <label> Kor </label>
                    <input type="text" placeholder="예) 컴퓨터" ref={korRef} />
                </div>
                <div className="input_area">
                    <label> Day </label>
                    <select ref={dayRef}>
                        {
                            days.map((day)=>{
                                return(
                                    <option key={day.id} value={day.day}>
                                    {day.day}
                                    </option>
                                )
                                   
                            })
                        }
                    </select>
                </div>
                <button> 저장 </button>
            </form>

        </div>
    )
}

export default CreateWord;