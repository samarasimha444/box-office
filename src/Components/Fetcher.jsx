import { useQuery } from "react-query";


const useFetch=(url,query)=>{
    

    const get=async (a)=>{
        const response=await fetch(`${url}${a}`);
        const data=await response.json();
        return data;
    }
    let{data,isLoading,error}=useQuery(
        {queryKey:[query],
            queryFn:()=>get(query),
            refetchOnWindowFocus:false,
            retry:false,
            
        }
    )
    return {data,isLoading,error};
}
export default useFetch;