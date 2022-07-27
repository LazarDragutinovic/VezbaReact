import { FC, useEffect, useState } from "react";
import { windowResizeObs } from "../../WindowObs";
import CategoriesSidebarGrid from "../CategoriesSidebarGrid/CategoriesSidebarGrid";
import "./CategoriesSidebar.css"

interface CategoriesSidebarProps {
    setShow: (state: boolean)=>void
}

const CategoriesSidebarForeground:string = "CategoriesSidebarForeground"
const CategoriesSidebarForegroundShow:string = "CategoriesSidebarForeground CategoriesSidebarForegroundShow"

const CategoriesSidebarBackground: string = "CategoriesSidebarBackground"
const CategoriesSidebarBackgroundDarker:string = "CategoriesSidebarBackground CategoriesSidebarBackgroundDarker"

let CategoriesSidebar : FC<CategoriesSidebarProps> = ({setShow})=>{

    const [classBackground,setClassBackground] = useState<string>(CategoriesSidebarBackground)
    const [classForground,setClassForeground] = useState<string>(CategoriesSidebarForeground)
    
    let deactivate = ()=>{
        setClassBackground(CategoriesSidebarBackground);
        setClassForeground(CategoriesSidebarForeground);
        setTimeout(()=>setShow(false),1000);
    }
    
    useEffect(()=>{
        setClassForeground(CategoriesSidebarForegroundShow);
        setClassBackground(CategoriesSidebarBackgroundDarker);
        let subscription = windowResizeObs.subscribe(_=>{
            if(window.innerWidth > 995) {
                deactivate();
            }
        })
        return ()=>subscription.unsubscribe()
    },[])
    

    return ( 
            <div className="CategoriesSidebar">
                <div className={classForground}>
                    <CategoriesSidebarGrid deactivate={deactivate} />
                </div>
                <div className={classBackground} onClick={deactivate}>

                </div>
            </div> 
        );
}

export default CategoriesSidebar;