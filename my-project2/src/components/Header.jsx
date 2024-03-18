import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return(
        <div className="header">
            <h1>
                <a href="/"> 소융과 채용 공지 사이트 </a>
            </h1>
            <div className="menu">
                <Link to="/create_com" className="link">
                    기업 추가
                </Link>
            </div>
        </div>
    )
}

export default Header;