import React, { useState, useEffect } from 'react';

const Animation4 = (props) =>{
    const [img, setImage] = useState(0);
    let count = 0;
    
    let widthSize = '20%';
    let heightSize = '15%';

    const char1Right = require('../AnimationForReact/Char3/Char3Right/char3Right.jpg');
    const char1RightWalk = require('../AnimationForReact/Char3/Char3Right/char3WalkRight.jpg');
    const char1RightWalk2 = require('../AnimationForReact/Char3/Char3Right/char3WalkRight2.jpg');
    
    const charStyle = {
        width: widthSize,
        height: heightSize
    }
    let pictures = [char1Right, char1RightWalk2, char1RightWalk];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setImage((img) => {
                img = <img src={pictures[count]} style={charStyle} alt={`img${count+1}`} />
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