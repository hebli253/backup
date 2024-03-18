import { useState } from "react";

function Word({word}) {
    const [isDone, setIsDone]=useState(word.isDone);
    const [isShow, setIsShow]=useState(false);

    const toggleDone = ()=>{
        fetch(`http://localhost:3001/words/${word.id}`, {
            method:'put',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify({
                ...word,
                isDone:!isDone
            }),
        })
            .then((res)=>{
                if(res.ok)
                    setIsDone(!isDone);
            })
    }

    const toggleShow = ()=>{
        setIsShow(!isShow);
    }

    const del = () => {
        if(window.confirm('정말로 삭제하시겠습니까?')) {
            fetch(`http://localhost:3001/words/${word.id}`, {
                method:'delete',
            })
            .then((res)=>{
                if(res.ok) {
                    window.location.reload();
                }
            })
        }
    }

    return(
        <>
        <tr className={isDone ? "off":""}>
            <td> 
                <input type="checkbox"
                        checked={isDone}
                        onChange={toggleDone}/> 
            </td>
            <td> {word.eng} </td>
            <td> {isShow && word.kor} </td>
            <td>
                <button onClick={toggleShow}>
                    뜻 {isShow ? "숨기기":"보기"}
                </button>
                <button className="del" onClick={del}>
                    삭제 
                </button>
            </td>
        </tr>
        </>
    )
}


function Word_Prev({word}) {
    const [isDone, setIsDone]=useState(word.isDone);
    const [isShow, setIsShow]=useState(false);

    const toggleDone = ()=>{
        setIsDone(!isDone);
    }

    const toggleShow = ()=>{
        setIsShow(!isShow);
    }

    return(
        <>
        <tr className={isDone ? "off":""}>
            <td> 
                <input type="checkbox"
                        checked={isDone}
                        onChange={toggleDone}/> 
            </td>
            <td> {word.eng} </td>
            <td> {isShow && word.kor} </td>
            <td>
                <button onClick={toggleShow}>
                    뜻 {isShow ? "숨기기":"보기"}
                </button>
                <button className="del">
                    삭제 
                </button>
            </td>
        </tr>
        </>
    )
}

export default Word;