
function Control(props) {
    return(
        <>
            <h2> Control Component</h2>
            <ul>
                <li>
                    <a href="" onClick={(e)=>{
                        e.preventDefault();
                        props.onChangeMode('create');
                    }}>
                        Create
                    </a></li>

                    <li>
                    <a href="" onClick={(e)=>{
                        e.preventDefault();
                        props.onChangeMode('update');
                    }}>
                        Update
                    </a></li>

                    <li>
                    <a href="" onClick={(e)=>{
                        e.preventDefault();
                        props.onChangeMode('delete');
                    }}>
                        Delete
                    </a></li>
            </ul>
        </>
    )
}

export default Control;