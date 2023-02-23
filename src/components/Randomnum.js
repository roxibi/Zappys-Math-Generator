import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "../App.css";

const Randomnum = () => {
    const [arr, setArr] = useState([]);
    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await document.querySelector("#pdf");
        pdf.html(data).then(() => {
          pdf.save(`Zappys.pdf`);
        });
      };

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
 
    return (
        <div id="pdf">
             <button onClick={createPDF} type="button">Download</button>
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



export default Randomnum;
