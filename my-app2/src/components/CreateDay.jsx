import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";

function CreateDay() {
    //전체 Day 정보 가져오기
    const days = UseFetch('http://localhost:3001/days');
    const history = useHistory();

    const addDay = ()=>{
        console.log(`Days length : ${days.length}`);
        fetch('http://localhost:3001/days', {
            method:'post',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({
                day:(days.length+1),
            }),
        })
        .then((res)=>{
            if(res.ok){
                alert(`Day ${days.length+1}가 추가되었습니다.`);
                history.push('/'); //메인 페이지로 이동
            }
        })
    }

    return(
        <div className="addDay">
            <h2> 현재 날짜 : 총 {days.length}일 </h2>
            <button onClick={addDay}> Day 추가 </button>
        
        </div>
    )
}

export default CreateDay;