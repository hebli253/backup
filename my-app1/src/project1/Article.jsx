
//함수형 컴포넌트 !!
function Article(props){

    return(
        <>
            <article>
                <h2>{props.title} </h2>
                <ul>
                    <li> 채용 인원 : {props.desc} </li>
                    <li> 채용 직무 : {props.job} </li>
                    <li> 채용 기한 : {props.deadline} </li>
                </ul>
                 
                
                
            </article>
        </>
    )
}

export default Article;