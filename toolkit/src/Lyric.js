import React from 'react'
import {useState} from "react"
import { GoogleGenerativeAI } from "@google/generative-ai";


const Lyric = () => {
    const[lyrics, setLyrics]=useState("")
    const geminiapi = "AIzaSyA11OyOMu_K68NoMsyOhNhSXC29tSEiuPY"
    const genAI = new GoogleGenerativeAI(geminiapi);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const[aiResponse, setAIResponse] = useState("");
    const[isLoading,setIsLoading]=useState(false);
    const handleAI = async (e,text) => {
        e.preventDefault();
        setIsLoading(true);
        const prompt =` If there is no input respond with "Please input more" Answer in the format "Song Name, by Artist. You can listen here (then give the link)" .What song are the following lyrics from: ${text}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const summedText = response.text();
        setIsLoading(false)
        setAIResponse(summedText);
    }
  return (
    <form className="lyric" onSubmit={(e)=>handleAI(e, lyrics)}>
        <h1>Song Finder</h1>
        <textarea
        placeholder="Input Lyrics here (Powered by Google Gemini)"
        value={lyrics}
        onChange={(e) => {
            setLyrics(e.target.value);
        }}
        />
        <button className="button" type="submit">Find Song</button>
        <input type="text" placeholder='Result' value={isLoading?"Loading...":aiResponse} readOnly />

    </form>
  )
}

export default Lyric