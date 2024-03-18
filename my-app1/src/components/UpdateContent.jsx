import { useState } from "react";

function UpdateContent(props){
    let [title, setTitle] = useState(props.data.title);
    let [desc, setDesc] = useState(props.data.desc);

    return(
    <>
        <h2> Update </h2>
        <form action="" method="post"
            onSubmit={(e)=>{
                e.preventDefault();
                props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value,
                )
            }}>
            <p>
                <input type="text" name="title" value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}></input>
            </p>
            <p>
                <input type="text" name="desc" value={desc}
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