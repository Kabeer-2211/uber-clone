import { useContext } from "react";
import { axiosInterceptorContext } from "../context/AxiosInterceptorProvider";

function useAxiosInterceptor(){
    return useContext(axiosInterceptorContext);
}

export default useAxiosInterceptor;