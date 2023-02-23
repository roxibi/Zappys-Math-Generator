import React, { useEffect, useState } from "react";
import "../App.css";

const Randomnum = () => {
    const [arr, setArr] = useState([]);

    const nums = () => {
        let tempArray = [];
        const sign = "*";
        let num1;
        let num2;
        while (tempArray.length < 50) {
            num1 = Math.ceil(Math.random() * 15);
            num2 = Math.ceil(Math.random() * 15);

            if (!tempArray.includes(num1 + sign + num2)) {
                tempArray.push(num1 + sign + num2);
            }
            console.log(tempArray.length);
        }
        setArr(tempArray);
    };
    console.log(arr);
    useEffect(() => {
        nums();
    }, []);
    // const generate =(num1, num2, sign)=>{
    //=>{arr.push}
    return (
        <div>
            {" "}
            <h1>Zappys - generate Math Exercises</h1>
            <p>Refresh the page to generate new exercises!</p>
            <div className='grid-exercises'>
                {arr.map((x) => (
                    <div className="grid-item">{x}=</div>
                ))}
            </div>
        </div>
    );
};

// }

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
//   }
// const size = max - min;
// const startAt = min;
// const range = (size, startAt) => {
//     return [...Array(size).keys()].map((i) => i + startAt);
// };
// console.log(size)
// console.log(startAt)
// console.log(sign)

export default Randomnum;
