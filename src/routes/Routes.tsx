import { useRoutes,useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import {cloneElement} from 'react'
import { Home } from "../views/Home";
import { Thanks } from "../views/Thanks";



export const Routes = () => {
    const element = useRoutes([
        {
            path:'/',
            element:<Home/>,
        },
        {
            path:'/mssg',
            element:<Thanks/>
        }
    ])
    const location = useLocation();
    if (!element) return null;
    return (
        <AnimatePresence mode="wait" initial={false}>
            {cloneElement(element, {key: location.pathname})}
        </AnimatePresence>
    )

}