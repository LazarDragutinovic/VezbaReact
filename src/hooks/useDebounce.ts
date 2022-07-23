import { useEffect, useState } from "react";



function useDebounce(val:any, time?: number) {

    const [value, setValue] = useState<any>(val);
    useEffect(()=>{
        let timeout : NodeJS.Timeout = setTimeout(()=>{
            setValue(val);
        }, time || 500);
        return ()=> {
            clearTimeout(timeout);
        }
    },[val])

    return  value;
}

export default useDebounce;