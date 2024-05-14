import { createContext, useState } from "react"

const LiskPayContext = createContext();

export const LiskPayProvider = ({children}) => {
    const [isReload, setIsReload] = useState(false);

    return (
        <LiskPayContext.Provider value={{isReload, setIsReload}}>
            {children}
        </LiskPayContext.Provider>
    )
}

export default LiskPayContext;