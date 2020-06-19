import React, { useState, useEffect } from 'react';

const Animation2 = (props) =>{
    const [img, setImage] = useState(0);
    let count = 0;

    const char1Back = require('../AnimationForReact/Char3/Char3Back/char3Back.jpg');
    const char1BackWalk = require('../AnimationForReact/Char3/Char3Back/char3BackWalk2.jpg');
    const char1BackWalk2 = require('../AnimationForReact/Char3/Char3Back/char3BackWalk3.jpg');
    
    let pictures = [char1Back, char1BackWalk, char1BackWalk2];
    

    useEffect(() => {
        const interval = setInterval(() => {
            setImage((img) => {
                img = <img src={pictures[count]} style={props.style} alt={`img${count+1}`} />
                if (count === 2) count = 1
                else count++
                return img
            })
          }, 200);
          return () => clearInterval(interval);
    }, []);

    return(
        <div>
        {img}
        </div>
    )
}

export default Animation2