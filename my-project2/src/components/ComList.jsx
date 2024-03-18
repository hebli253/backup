import { useParams, Link } from "react-router-dom";

import UseFetch from "./UseFetch";

function ComList(){
    const del = (coms) => {
        if(window.confirm('정말로 삭제하시겠습니까?')) {
            fetch(`http://localhost:3001/coms/${coms.id}`, {
                method:'delete',
            })
            .then((res)=>{
                if(res.ok) {
                    window.location.reload();
                }
            })
        }
    }


    //locahost:3000/word/2
    //let day = 1; //day1 으로 가정..

    const comList = UseFetch(`http://localhost:3001/coms/`);

    return(
        <div>
            <ul className="list_day">
                {
                    comList.map((coms)=>{
                        return(
                            <li key={coms.id}>
                                
                                    {coms.name} {coms.id}<br/>
                                    채용 인원 : {coms.num} <br/>
                                    직무 : {coms.job} <br/>
                                    지원기한 : {coms.date} <br/>
                                    
                                    <button className="fix">
                                        <Link to={'/update_com/'+coms.id} >
                                                수정
                                        </Link > 
                                    </button>
                                    
                                    
                                    <button className="del" onClick={()=>{
                                        del(coms);
                                    }}>
                                        삭제 
                                    </button>
                                
                                
                            </li>                              
                        )
                    })
                }
        
            </ul>

        </div>
    )
} 

export default ComList;