
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
                <h2>{props.nav}</h2>
                <ul>
                    {list}
                </ul>
            </nav>
        </>
    )

}


export default Nav;