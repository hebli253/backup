function CreateContent(props) {
    return(
        <>
            <h2> Create </h2>
            <form action="" method="post"
                onSubmit={(e)=>{
                    e.preventDefault();
                    console.log(e);
                    props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    );
                    //입력 값을 전달한 후에 입력창을 비워주는 코드
                    e.target.title.value = "";
                    e.target.desc.value = "";
                }}>
                <p> <input type="text" name="title" placeholder="title"></input></p>
                <p> <input type="text" name="desc" placeholder="description"></input></p>
                <p> <input type="submit" name="제출"></input></p>

            </form>
        </>
    ) 
}

export default CreateContent;