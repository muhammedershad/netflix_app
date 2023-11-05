import axios from "axios";
import { baseUrl } from "./constents";
import React from "react";

export const AxiosContext = React.createContext()

const axiosInstance = axios.create({
    baseURL: baseUrl
})

const AxiosProvider = ({children}) => {
    return (
        <AxiosContext.Provider value={{axiosInstance}} >
            {children}
        </AxiosContext.Provider>
    )
}
export default AxiosProvider;
