import { useEffect, useState } from "react";

const getProp = (data,prop) => {
    if(prop === 'ethsupply'){
        return data.result;
    }

    if(prop === 'totalnodes'){
        return data.result['TotalNodes'];
    }

    return 0;

}

export const useEtherStats = ({id,autoScale,statName}) => {
    const [stat,setStat] = useState({
        number: 0,
        mantissa: 0,
        scaleName: 'M',
        scaleSymbol: 'M',
        unit: 'ETH'
    });

    useEffect(()=>{
        fetch(`/api/info?id=${id}`)
        .then( response => response.json())
        .then( data => {
            data[statName] && setStat(data[statName]);
        })
        .catch( error => console.log(error));
    },[statName,id]);

    let scaledStat = 0;
    if(autoScale) {
        scaledStat = (stat.number/(1e+6));
    }else {
        scaledStat = (stat.number);
    }

    return {  ...stat, number: scaledStat.toFixed(2), };
};


export const useInfo = ({id}) => {
    const [info,setInfo] = useState('');

    useEffect(()=>{
        fetch(`/api/info?id=${id}`)
        .then( response => response.json())
        .then( data => {
            setInfo(data);
        })
        .catch( error => console.log(error));
    },[id]);

    return info;
};
