import { useContext } from "react"
import { EhMobileContext } from "../contexts/EhMobileContext"

export const useEhMobile = () => {
    return useContext(EhMobileContext)
}