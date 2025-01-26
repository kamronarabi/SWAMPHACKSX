import React from 'react'
import { useState } from "react";

const YtMP3 = () => {
    const [link, setLink] = useState('');
    const [id, setId] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [change, setChange] = useState(0)
    
    // const fetchData = () => {
    //     let interval = setInterval(async function() {
    //     setDisabled(true);
    //     const res = await fetch(id);
        
    //     if (res.status === 200 && res.data.status === "ok") {
    //         setDisabled(false);
    //         setResponse(res.data);
    //         clearInterval(interval);
    //     } else if (res.status === 200 && res.data.status === "fail") {
    //         alert("Invalid video ID");
    //         setDisabled(false);
    //         clearInterval(interval);
    //     }

    //     }, 1000);
    // }

  
    // useEffect(() => {
    //   if (response) {
    //     window.location.href = response.link;
    //   }
    // }, [response]);
  
    return (
      <div className='ytconverter'>
        <div id="logo">
          <h2>MP3 DOWNLOADER</h2>
        </div>
  
        <div id="body">
          <input
            type="text"
            placeholder="YouTube link here"
            value={link}
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
        </div>
  
        <button
          onClick={() => {
            const text = link.split("=")[1];
            if (text) {
              setId(text);
            }
            setChange(change+1)
            // fetchData(id);
          }}
          disabled={disabled}
          className={disabled ? "btn-disabled" : ""}
        >Download</button>
        <p style={{fontSize:"24px", color:"red"}}>This tool is currently down. I apologize for the inconvenience</p>
      </div>
    )
  }

export default YtMP3;
