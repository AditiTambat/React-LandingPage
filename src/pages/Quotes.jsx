import { Fetchapi } from "../Fetchapi";
function Quotes(){
    const apiUrl = "https://dummyjson.com/quotes";
    return(
        <>
            <Fetchapi url={apiUrl}/>
        </>
    ) 
}
export default Quotes;