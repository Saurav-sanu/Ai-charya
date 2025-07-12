import { toast } from "sonner";

const {useState} =require("react")

const useFetch=(cb)=>{
    const[data,setData]=useState(undefined);
    const[loading,SelectLoading]=useState(null);
    const[error,setError]=useState(null);

    const fn=async(...args)=>{
        SelectLoading(true);
        setError(null);

        try{
            const response=await cb(...args);
            setData(response);
            setError(null);
            
        }
        catch(error){
            setError(error);
            toast.error(error.message);

            
        }
        finally{
            SelectLoading(false);
        }

    };


    return {data,loading,error,fn};
};

export default useFetch
