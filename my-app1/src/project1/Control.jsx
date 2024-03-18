
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
                        회사 추가
                    </a></li>

                    <li>
                    <a href="" onClick={(e)=>{
                        e.preventDefault();
                        props.onChangeMode('update');
                    }}>
                        회사 정보 변경
                    </a></li>

                    <li>
                    <a href="" onClick={(e)=>{
                        e.preventDefault();
                        props.onChangeMode('delete');
                    }}>
                        회사 정보 삭제
                    </a></li>
            </ul>
        </>
    )
}

export default Control;