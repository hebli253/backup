
//함수형 컴포넌트 !!
function Article(props){

    return(
        <>
            <article>
                <h2>{props.title} </h2>
                <ul>
                    <li>{props.desc}</li>
                </ul>
                
            </article>
        </>
    )
}


export default Article;