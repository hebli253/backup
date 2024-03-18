//days.json으로부터 데이터 가져오는 코드
import { Link } from "react-router-dom";
import data from "../database/days.json"
import { useEffect, useState } from "react";
import UseFetch from "./UseFetch";

function DayList() {
    const days = UseFetch("http://localhost:3001/days");

    console.log(`${days}`);
    
    return(
        <div>
            <ul className="list_day">
                {
                    days.map((day)=>{
                        return(
                            <li key={day.id}>
                                <Link to={`/word/${day.day}`}>
                                {/* <a href="#"> Day : {day.day} </a> */}
                                    Day {day.day}
                                </Link>
                            </li>                              
                        )
                    })
                }
        
            </ul>

        </div>
    )
}

function DayList_Prev2() {
    const [days, setDays] = useState([]);

    //DayList() 컴포넌트가 처음 렌더링 될 때만 실행되도록 한다.
    //왜냐하면 리렌더링 될 때마다, 
    //서버에 접속해서 해당 day 정보를 계속 가져올 필요가 없기 때문이다.
    //(Day 정보는 한 번만 가져오면 됨)
    useEffect(()=>{
        console.log(`json 서버로부터 days 정보를 읽는다. (DayList())`);
        fetch('http://localhost:3001/days')
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                setDays(data);
            })
    }, []);
    
    return(
        <div>
            <ul className="list_day">
                {
                    data.days.map((day)=>{
                        return(
                            <li key={day.id}>
                                <Link to={`/word/${day.day}`}>
                                <a href="#"> Day : {day.day} </a>
                                </Link>
                            </li>                              
                        )
                    })
                }
        
            </ul>

        </div>
    )
}


//파일로 부터 데이터를 가져오는 버전!!
function DayList_Prev() {
    return(
        <div>
            <ul className="list_day">
                {
                    data.days.map((day)=>{
                        return(
                            <li key={day.id}>
                                <Link to={`/word/${day.day}`}>
                                <a href="#"> Day : {day.day} </a>
                                </Link>
                            </li>                              
                        )
                    })
                }
        
            </ul>

        </div>
    )
}

export default DayList;
