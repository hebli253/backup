
function Nav(props){
    const list = props.data.map((content)=>{
        return(
            <li key={content.id}>
                <a href={content.id}
                    onClick={(e)=>{
                        e.preventDefault();
                        props.onChangeMode(content.id);
                    }}>
                    {content.title}
                    </a>
            </li>
        )
    })
    return(
        <>
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        </>
    )

}

function NavEx1(){
    return(
        <>
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li>
                </ul>
            </nav>
        </>
    )

}

export default Nav;