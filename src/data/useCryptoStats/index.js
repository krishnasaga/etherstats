import { useEffect, useState } from "react";

export const useCryptoStats = ({page =1} = {}) => {
    const [list,setList] = useState([]);

    useEffect(()=>{
        fetch(`/api/list?page=${page}`)
        .then( response => response.json())
        .then( data => {
            setList(data);
        })
        .catch( error => console.log(error));
    },[page]);

    return list;
};
