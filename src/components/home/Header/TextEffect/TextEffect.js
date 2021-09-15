import React from 'react';
import Typewriter from "typewriter-effect";

const TextEffect = () => {
    return (
        <div className=" font-weight-bold h4 d-flex ms-5 my-3" style={{color: 'orange'}}>
            {/* <span className="mr-2">A</span> */}
            <Typewriter
                options={{
                    strings: ["Welcome To","প্রজাপতি ওয়েডিং এন্ড ইভেন্ট", "You Dream", "We Fullfil"],
                    autoStart: true,
                    loop: true,
                    delay: 50
                }}
            />
        </div>
    );
};

export default TextEffect;