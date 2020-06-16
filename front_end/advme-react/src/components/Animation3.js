import React, { useState, useEffect } from 'react';

const Animation3 = (props) =>{
    const [img, setImage] = useState(0);
    let count = 0;
    
    let widthSize = '20%';
    let heightSize = '15%';
    
    const char1Left = require('../AnimationForReact/Char3/Char3Left/char3Left.jpg');
    const char1LeftWalk = require('../AnimationForReact/Char3/Char3Left/char3WalkLeft.jpg');
    const char1LeftWalk2 = require('../AnimationForReact/Char3/Char3Left/char3WalkLeft2.jpg');
    
    const charStyle = {
        width: widthSize,
        height: heightSize
    }
    let pictures = [char1Left, char1LeftWalk2, char1LeftWalk];
 

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

export default Animation3