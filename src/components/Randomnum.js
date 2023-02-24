import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import "../App.css";
import Logo from "../assets/Zappys-green.png";

const Randomnum = () => {
    const [arr, setArr] = useState([]);
    const [sign, setSign] = useState("*");

    const options = ["*", "+", "-", "÷"];

    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await document.querySelector("#pdf");
        pdf.html(data).then(() => {
            pdf.save(`Zappys.pdf`);
        });
    };

    const nums = () => {
        let tempArray = [];

        let num1;
        let num2;
        while (tempArray.length < 60) {
            num1 = Math.ceil(Math.random() * 12);
            num2 = Math.ceil(Math.random() * 12);

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
        // eslint-disable-next-line
    }, [sign]);

    return (
        <div>
            <div className='img'>
                <img className='logo' src={Logo} alt='Zappys Logo' />{" "}
            </div>
            <header>
                <h1>Math worksheets generator</h1>
                <div className="sign-line">
                <p>Select the operation</p>
                <select onChange={(e) => setSign(e.target.value)}>
                    {options.map((o, index) => {
                        return (
                            <option key={index} value={o}>
                                {o}{" "}
                            </option>
                        );
                    })}
                </select></div>
            </header>
            <div id='pdf'>
                <div className='grid-exercises'>
                    {arr.map((x) => (
                        <div className='grid-item'>{x}=</div>
                    ))}
                </div>
                <p className='copyright'>
                    © Zappys by Diana & <a href='https://roxana-bita-webdev.netlify.app/en'>Roxana Bita</a>, 2023
                </p>
            </div>
            <button onClick={createPDF} type='button'>
                Download
            </button>
        </div>
    );
};

export default Randomnum;
