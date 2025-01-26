import React from 'react'
import QRCode from "react-qr-code"
import {useState, useRef} from "react"

const QR = () => {
    const [bgColor,setBgColor]=useState("white")
    const [fgColor,setFgColor]=useState("black")
    const [content,setContent]=useState("Go ahead input something!")
    const [filename,setFilename]=useState("QR")
    const qrRef=useRef(null);

    const handleDownload=() =>{
        const svgElement = qrRef.current.querySelector("svg");
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const pngData = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = pngData;
            link.download = `${filename}.png`;
            link.click();
        };
        const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(svgBlob);
        img.src = url;
    };
  return (
    <div className="qrmain">
        <h3>QRCode Generator</h3>
        <div className="qr">
            <div className="inputs">
                <input type="text" placeholder='Background Color' onChange={(e)=>setBgColor(e.target.value)}/>
                <input type="text" placeholder='Foreground Color'onChange={(e)=>setFgColor(e.target.value)}/>
                <input type="text" placeholder='QR Content'onChange={(e)=>setContent(e.target.value)}/>
                <input type="text" placeholder='Filename'onChange={(e)=>setFilename(e.target.value)}/>
            </div>
            <div className="output" ref={qrRef}>
                <QRCode
                size={150}
                bgColor={bgColor}
                fgColor={fgColor}
                value={content}
                />
            </div>
        </div>
        <div style={{padding:"10px"}}></div>
        <button className='button' onClick={handleDownload}> Generate</button>
    </div>
  )
}

export default QR