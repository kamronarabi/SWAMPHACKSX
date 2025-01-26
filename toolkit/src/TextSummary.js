import React from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import {useState} from "react"


const TextSummary = () => {
    const GEMINI_API_KEY="AIzaSyA11OyOMu_K68NoMsyOhNhSXC29tSEiuPY"
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const[text, setText] = useState("");
    const[aiResponse, setAIResponse] = useState("");
    const[isLoading,setIsLoading]=useState(false);
    const handleAI = async (e,text) => {
        e.preventDefault();
        setIsLoading(true);
        const prompt = `Summarize the following text: ${text}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const summedText = response.text();
        setIsLoading(false)
        setAIResponse(summedText);
    }

  return (
    <form className="TextSummarizer" onSubmit={(e)=>handleAI(e, text)}>
        <h2>Text Summarizer</h2>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <textarea
                style={{ width:"250px", height:"250px", padding:"10px", margin:"20px"}}
                id="text"
                type="text"
                required
                value = {text}
                onChange = {(e)=> setText(e.target.value)}
                placeholder = "Enter text to be summarized..."
            />
            <div style={{ width:"250px", height:"250px", backgroundColor:"white" , color: 'black', overflowY:"scroll",padding:"10px", margin:"20px"}}>{isLoading ? "Loading..." : aiResponse ? aiResponse : "Summarized Text (Powered by Google Gemini)"}</div>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}
export default TextSummary