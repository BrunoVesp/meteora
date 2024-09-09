import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

interface EhMobileContext {
    ehMobile: boolean
}

interface EhMobileProviderProps {
    children: React.ReactNode
}

export const EhMobileContext = createContext<EhMobileContext>({} as EhMobileContext)

export const EhMobileProvider = ({ children } : EhMobileProviderProps) => {

    const ehMobile = useMediaQuery({ query: '(max-width: 800px)' });

    return (
        <EhMobileContext.Provider value={{ehMobile}}>
            {children}
        </EhMobileContext.Provider>
    )
}