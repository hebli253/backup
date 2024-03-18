
function Header(props){

    return (
        <>
                <h1> <a href="" onClick={(e)=>{
                        e.preventDefault();
                        props.onChangeMode();
                    }}>{props.title}</a> 
                    </h1>
                {props.sub} 
        </>
    )
}

function HeaderEx1(){
    return (
        <>
            <header>
                <h1> WEB </h1> 
                World Wide web        
            </header>
        </>
    )
}
export default Header;