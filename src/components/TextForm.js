import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');
    // text = "New Text"   // Wrong way to change the state
    // setText ("New Text");   // correct way to change the state

    // Convert to Upper Case
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case");
    }

    // Convert to Lower Case
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case");
    }

    // Copy to Clipboard
    const handleCopy = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard");
    }  

    // Clears Extra Spaces
    const handleClearXtra = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces");
    }

    // Clears Text Area
    const handleDltClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text Area");
    }

    // this is to target all values in real-time for preview it at the end
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{color: props.mode==='light'?'#101112':'white'}}>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea type="text" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#101112':'white', color: props.mode==='light'?'#101112':'white'}} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} type="button" className="btn btn-info rounded-pill mx-1 my-1" onClick={handleUpClick}>Upper-Case</button>
                <button disabled={text.length===0} type="button" className="btn btn-success rounded-pill mx-1 my-1" onClick={handleLowClick}>Lower-Case</button>
                <button disabled={text.length===0} type="button" className="btn btn-warning rounded-pill mx-1 my-1" onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary rounded-pill mx-1 my-1" onClick={handleClearXtra}>Clear Extra Spaces</button>
                <button disabled={text.length===0} type="button" className="btn btn-danger rounded-pill mx-1 my-1" onClick={handleDltClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'#101112':'white'}}>
                <h1>Your Text Summary</h1>
                <p><i>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</i> words and <i>{text.length}</i> characters.</p>
                <p><i>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length}</i> minutes reading.</p>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'#101112':'white'}}>
                <h1>Preview</h1>
                <p>{text.length>0?text:"Enter something in Text Box to preview here"}</p>
            </div>
        </>
    )
}
