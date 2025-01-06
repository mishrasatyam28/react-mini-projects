import React, { useState } from 'react'
import { images } from './data'
import './style.css'

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    console.log(selectedImage)

    return (
        <div className='container'>
            <h1>02-Image Gallery</h1>
            <div className="image-container-parent">
                {
                    images.map(Item => (

                        <img key={Item.id} onClick={(e)=>setSelectedImage(Item.url)} className='img-section' src={Item.url} alt="" />

                    ))
                }
            </div>
            <div className="">
                {
                    selectedImage && selectedImage !==null ? <img src={selectedImage} alt="" />:''
                }
            </div>
            <hr />
          

        </div>
    )
}

export default ImageGallery