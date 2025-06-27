import { createContext } from "react";


const AppContext = createContext({
    showAdd : true,
    setIsDisplayed : ()=>{}
})

export default AppContext