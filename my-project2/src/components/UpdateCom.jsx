import { useRef, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";
import ComList from "./ComList";

function UpdateCom() {
    const {id} = useParams();
    console.log(`id : ${id}`);

    const [company, setCompany] = useState(null);
    let [cname, setCname] = useState(null);
    let [cnum, setCnum] = useState(null);
    let [cjob, setCjob] = useState(null);
    let [cdate, setCdate] = useState(null);

    //const coms = UseFetch(`http://localhost:3001/coms/${id}`);

    useEffect(()=>{
        fetch(`http://localhost:3001/coms/${id}`)
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                //setCompany(data);
                setCname(data.name);
                setCnum(data.num);
                setCjob(data.job);
                setCdate(data.date);
            })
    }, []);

    console.log(company);


    const history = useHistory();


    const onSubmit = (e)=>{
         //console(`${coms.id}`)

        e.preventDefault();
        fetch(`http://localhost:3001/coms/${id}`, {
            method:'put',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({
                name:cname,
                num:cnum,
                job:cjob,
                date:cdate
            })
        })
        .then((res)=>{
            if(res.ok) {
                alert(`기업정보가 수정되었습니다.`);
                history.push(`/`);
            }
        })
    }

    return(
        <div className="create_form">
            
            <h2> 정보 수정 </h2>
            {/* <input type="text" value={company.date}></input> */}
            <form onSubmit={onSubmit}>
                <div className="input_area">
                    <label> 기업명 </label>
                    <input type="text" name="name" value={cname}  
                           onChange={(e)=>{
                                setCname(e.target.value);
                    }}></input>
                </div>
                <div className="input_area">
                    <label> 채용 인원 </label>
                    <input type="text" name="num" value={cnum} 
                        onChange={(e)=>{
                            setCnum(e.target.value);
                        }}/>
                </div>
                <div className="input_area">
                    <label> 직무 </label>
                    <input type="text" name="job" value={cjob} 
                        onChange={(e)=>{
                            setCjob(e.target.value);
                        }}/>
                </div>

                <div className="input_area">
                    <label> 지원 기한 </label>
                    <input type="text" name="date" value={cdate}
                        onChange={(e)=>{
                            setCdate(e.target.value);
                        }}/>
                </div>

                <button> 수정 </button>
            </form>


        </div>
    )
}

export default UpdateCom;