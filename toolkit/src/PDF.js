import React from 'react'
import { jsPDF } from 'jspdf';
import { useState } from 'react';

const PDF = () => {
    const [txtContent, setTxtContent] = useState('');
    const [fileName, setFileName] = useState('');
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
           setTxtContent(e.target.result);
        };
    
        reader.readAsText(file);
    };
    
    const generatePdf = () => {
        const doc = new jsPDF();
        doc.text(txtContent, 10, 10);
        doc.save(`${fileName}.pdf`);
        setFileName("");
        setTxtContent("");
    };
    
  return (
    <main className="pdfconverter">
        <h2>Text to PDF Converter</h2>
        <input type="file" accept=".txt" onChange={handleFileChange} />
        <input type="text" placeholder="Desired PDF Name" onChange={(e)=>setFileName(e.target.value)}></input>
        <button className="button" onClick={generatePdf}>Convert to PDF</button>
    </main>
  )
}

export default PDF