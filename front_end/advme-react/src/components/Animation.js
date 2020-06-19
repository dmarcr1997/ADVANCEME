import React, { useState, useEffect } from 'react';

const Animation = (props) =>{
    const [img, setImage] = useState(0);
    let count = 0;
    
    const char1FrontWalk = require('../AnimationForReact/Char3/Char3front/char3WalkFront.jpg');
    const char1FrontWalk2 = require('../AnimationForReact/Char3/Char3front/char3WalkFront2.jpg');

    let pictures = [char1FrontWalk, char1FrontWalk2, char1FrontWalk];

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

export default Animation
