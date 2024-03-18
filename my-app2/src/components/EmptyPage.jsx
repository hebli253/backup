import { Link } from "react-router-dom";

function EmptyPage() {
    return(
        <div>
            <h2> 잘못된 접근입니다! 관리자에게 문의하세요.</h2>
            <Link to ={"/"}> 
                <h3> 메인으로 돌아가기 </h3>
            </Link>
        </div>
    )
}

export default EmptyPage;