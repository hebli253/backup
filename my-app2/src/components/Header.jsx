import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return(
        <div className="header">
            <h1>
                <a href="/"> 토익 영단어 </a>
            </h1>
            <div className="menu">
                <Link to="/create_word" className="link">
                    단어 추가
                </Link>

                {/* <a href="" className="link">Day 추가</a> */}
                <Link to="/create_day" className="link">
                    Day 추가
                </Link>
            </div>
        </div>
    )
}

function Header_Prev() {
    return(
        <div className="header">
            <h1>
                <a href="/"> 토익 영단어 </a>
            </h1>
            <div className="menu">
                <a href="" className="link">단어 추가</a>
                <a href="" className="link">Day 추가</a>
            </div>
        </div>
    )
}

export default Header;