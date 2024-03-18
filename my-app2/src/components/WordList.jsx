import { useParams } from "react-router-dom";
import Word from "./Word";
import data from "../database/words.json"
import { useEffect, useState } from "react";
import UseFetch from "./UseFetch";

function WordList(){
    //locahost:3000/word/2
    //let day = 1; //day1 으로 가정..
    const {day} = useParams();
    console.log(`day : ${day}`);

    const wordList = UseFetch(`http://localhost:3001/words?day=${day}`)

    return(
        <div>
            <h2> Day {day} </h2>
            <table>
                <tbody>
                    {
                        wordList.map((word)=>{
                            return(
                                <Word word={word} key={word.id} />
                            )

                        })
                    }
                </tbody>
            </table>

        </div>
    )
} 

function WordList_Prev2(){
    //locahost:3000/word/2
    //let day = 1; //day1 으로 가정..
    const {day} = useParams();
    console.log(`day : ${day}`);

    // let wordList = data.words.filter((word)=>{
    //     return (word.day == Number(day) );
    // });

    const [wordList, setWordList] = useState([]);
    //day 변수가 변화할때만, useEffect() 실행 
    useEffect(()=>{
        console.log(`(wordList()) : json 서버로 부터 wordList 읽음 !!`);
        fetch(`http://localhost:3001/words?day=${day}`)
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                setWordList(data);
            });
    },[day])


    

    return(
        <div>
            <h2> Day {day} </h2>
            <table>
                <tbody>
                    {
                        wordList.map((word)=>{
                            return(
                                // <tr key={word.id}>
                                //     <td>
                                //         {word.eng}
                                //     </td>
                                //     <td>
                                //         {word.kor}
                                //     </td>
                                // </tr>
                                <Word word={word} key={word.id} />
                            )

                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

function WordList_Prev(){
    //locahost:3000/word/2
    //let day = 1; //day1 으로 가정..
    const {day} = useParams();
    console.log(`day : ${day}`);

    let wordList = data.words.filter((word)=>{
        return (word.day == Number(day) );
    });
    //console.log(wordList);

    return(
        <div>
            <h2> Day {day} </h2>
            <table>
                <tbody>
                    {
                        wordList.map((word)=>{
                            return(
                                // <tr key={word.id}>
                                //     <td>
                                //         {word.eng}
                                //     </td>
                                //     <td>
                                //         {word.kor}
                                //     </td>
                                // </tr>
                                <Word word={word} key={word.id} />
                            )

                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default WordList;