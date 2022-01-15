import { sizes } from '@theme-ui/preset-bootstrap';
import React, { useLayoutEffect,useRef, useState } from 'react';
import { Box } from 'theme-ui';

export const Icon = ({name,size,color,sx,...rest}) => {
    
    const [svg,setSVG] = useState('');


   useLayoutEffect(()=>{
       fetch(`/icons/${name}.svg`)
         .then(response => response.text())
         .then(text => {
            setSVG(text);
        })
        .catch(console.error.bind(console));
   });


    return <Box dangerouslySetInnerHTML={{__html: svg} } id='icon' sx={ { fill: color , width: size, height: size,...sx}} {...rest}/>;
};
