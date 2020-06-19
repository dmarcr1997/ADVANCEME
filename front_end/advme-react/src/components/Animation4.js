import React, { useState, useEffect } from 'react';

const Animation4 = (props) =>{
    const [img, setImage] = useState(0);
    let count = 0;

    const char1Right = require('../AnimationForReact/Char3/Char3Right/char3Right.jpg');
    const char1RightWalk = require('../AnimationForReact/Char3/Char3Right/char3WalkRight.jpg');
    const char1RightWalk2 = require('../AnimationForReact/Char3/Char3Right/char3WalkRight2.jpg');

    let pictures = [char1Right, char1RightWalk2, char1RightWalk];
    
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

export default Animation4