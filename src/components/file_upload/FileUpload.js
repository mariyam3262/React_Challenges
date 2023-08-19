import axios from 'axios';
import React, { useState } from 'react'

function FileUpload() {
    const [file, setFile] = useState(null);
    const [src, setSrc] = useState(null);


    const handleChange = (e) => setFile(e.target.files[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(file)

        if (file.type.includes('png') || 
                file.type.includes('gif') || 
                    file.type.includes('jpg')){
            if(file.size <= 800000){ // upto 800kb
                setSrc(file) 
            }
            else{
                alert('size should be upto 800kb')
            }
           
        }
        else{
            alert('Enter valid type of file(jpg, gif, png)')
        }

    } 
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label htmlFor="file">File : </label>
            <input type="file" name="file" id="file" onChange={handleChange} />
            <button type="submit">upload</button>
        </form>
        <div>
            <img src={src && `C:/Users/Admin/Pictures/${src.name}`} alt="Snapshot" />
        </div>
    </div>
  )
}

export default FileUpload
