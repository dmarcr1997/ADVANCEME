import React, { useState, useEffect } from 'react';

const Animation = () =>{
    const [img, setImage] = useState(0);
    const [type, setKey] = useState(0)
    let count = 0;

    let widthSize = '25%';
    let heightSize = '20%';

    const char1Front = require('../AnimationForReact/Char3/Char3front/char3Front.jpg');
    const char1FrontWalk = require('../AnimationForReact/Char3/Char3front/char3WalkFront.jpg');
    const char1FrontWalk2 = require('../AnimationForReact/Char3/Char3front/char3WalkFront2.jpg');
    
    const char1Back = require('../AnimationForReact/Char3/Char3Back/char3Back.jpg');
    const char1BackWalk = require('../AnimationForReact/Char3/Char3Back/char3BackWalk2.jpg');
    const char1BackWalk2 = require('../AnimationForReact/Char3/Char3Back/char3BackWalk3.jpg');
    
    const char1Right = require('../AnimationForReact/Char3/Char3Right/char3Right.jpg');
    const char1RightWalk = require('../AnimationForReact/Char3/Char3Right/char3WalkRight.jpg');
    const char1RightWalk2 = require('../AnimationForReact/Char3/Char3Right/char3WalkRight2.jpg');
    
    const char1Left = require('../AnimationForReact/Char3/Char3Left/char3Left.jpg');
    const char1LeftWalk = require('../AnimationForReact/Char3/Char3Left/char3WalkLeft.jpg');
    const char1LeftWalk2 = require('../AnimationForReact/Char3/Char3Left/char3WalkLeft2.jpg');
    
    const charStyle = {
        width: widthSize,
        height: heightSize
    }
    let pictures;
    if(type === 1){
        pictures = [char1FrontWalk, char1FrontWalk2, char1FrontWalk];
    }
    else if (type === 2){
        pictures = [char1Right, char1RightWalk2, char1RightWalk];
    }
    else if (type === 3){
        pictures = [char1Left, char1LeftWalk2, char1LeftWalk];
    }
    else{
        pictures = [char1Back, char1BackWalk, char1BackWalk2];
    }

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

export default Animation
