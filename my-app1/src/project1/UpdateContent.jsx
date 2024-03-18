import { useState } from "react";

function UpdateContent(props){
    let [title, setTitle] = useState(props.data.title);
    let [desc, setDesc] = useState(props.data.desc);
    let [job, setJob] = useState(props.data.job);
    let [deadline, setDeadline] = useState(props.data.deadline);

    return(
    <>
        <h2> Update </h2>
        <form action="" method="post"
            onSubmit={(e)=>{
                e.preventDefault();
                props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value,
                    e.target.job.value,
                    e.target.deadline.value,
                )
            }}>
            <p>
                회사이름 <input type="text" name="title" value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}></input>
            </p>

            <p>
                채용인원 <input type="text" name="desc" value={desc}
                    onChange={(e)=>{
                        setDesc(e.target.value)
                    }}></input>
            </p>

            <p>
                채용직무 <input type="text" name="job" value={job}
                    onChange={(e)=>{
                        setDesc(e.target.value)
                    }}></input>
            </p>

            <p>
                채용기간 <input type="text" name="deadline" value={deadline}
                    onChange={(e)=>{
                        setDesc(e.target.value)
                    }}></input>
            </p>

            <p>
                <input type="submit" value="변경"></input>
            </p>
                
        </form>
    </>
    )
}
export default UpdateContent;