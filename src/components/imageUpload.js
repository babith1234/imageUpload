import React from "react";
import { useState,useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, uploadBytes, listAll,getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imagelist, setImageList] = useState([])

  const imageListRef = ref(storage, "images/")

  useEffect(()=>{
    listAll(imageListRef).then((response)=>{
        response.items.forEach((item)=>{
            getDownloadURL(item).then((url)=>{
                setImageList((prev)=>[...prev,url])
            })
        })
    })
  },[])

  const uploadImage = () => {
    console.log(image)
    if (image === null) {
      return;
    } else {
      const imageRef = ref(storage, `images/${image.name + v4()}`);
      uploadBytes(imageRef, image).then(()=>{
        alert("File upload successfull")
      })
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      ></input>
      <button onClick={uploadImage}>Upload</button>
      {imagelist.map((url)=>{
        return <img src={url}/>
      })}
    </div>
  );
}
