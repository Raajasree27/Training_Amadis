import { useState } from "react";
function From3(){
    const[text,setText]=useState("");
    return(
        <><form>
            <label>
                Enter the text:
                <textarea type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}/>
            </label>
        </form>
        <p>{text}</p></>
    )
}
export default From3;