import { useEffect, useState } from 'react';

export const useData = ({ resource, id}) => {
    const [data,setData] = useState([]);
      useEffect(()=>{
            fetch(`/api/list?page=${id}`)
            .then( response => response.json())
            .then( data => {
                setData(data);
            })
            .catch( error => console.log(error));
        },[]);

    return data;
};
