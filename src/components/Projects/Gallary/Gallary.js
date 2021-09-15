import React, { useState } from 'react';
import ProjectData from '../ProjectData/ProjectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Gallary.css';
const Gallary = () => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, getTempImgSrc] = useState('');
    const getImg = (image) => {
        getTempImgSrc(image)
        setModel(true);
    }
    return (
        <>
         <h1 className="text-center title-nam">Photo Gallery</h1>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="" />
                <FontAwesomeIcon onClick={() => setModel(false)} icon={faTimes} />
            </div>
            <div className="gallery" id="gallery">
                {
                    ProjectData.map((item, index) => {
                        return (
                            <div className="pics" key={index}>
                                <img onClick={() => getImg(item.image)} style={{ width: '100%' }} src={item.image} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Gallary;