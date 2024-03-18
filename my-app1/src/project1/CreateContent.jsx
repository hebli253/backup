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
                        e.target.desc.value,
                        e.target.job.value,
                        e.target.deadline.value,
                    );
                    //입력 값을 전달한 후에 입력창을 비워주는 코드
                    e.target.title.value = "";
                    e.target.desc.value = "";
                    e.target.job.value = "";
                    e.target.deadline.value = "";
                }}>
                <p> 회사이름 <input type="text" name="title" placeholder="title"></input></p>
                <p> 채용인원 <input type="text" name="desc" placeholder="number of hire"></input></p>
                <p> 채용직무 <input type="text" name="job" placeholder="job"></input></p>
                <p> 채용기한 <input type="text" name="deadline" placeholder="deadline"></input></p>
                <p> <input type="submit" name="제출"></input></p>

            </form>
        </>
    ) 
}

export default CreateContent;