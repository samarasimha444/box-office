import { actor_search } from "./variables";
import { useQuery } from "react-query";
const useFetch=(show_url,query)=>{
    

    const get=async (a)=>{
        const show_response=await fetch(`${show_url}${a}`);
        const show_data=await show_response.json()
        let data=show_data
        return data;
    }
   let{data,isLoading,error}=useQuery(
        {queryKey:[query],
        queryFn:()=>get(query),
        refetchOnWindowFocus:false,
        retry:1,
         }
    )
    return {data,isLoading,error};
}
export default useFetch;