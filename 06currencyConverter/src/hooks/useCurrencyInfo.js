import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(()=>{
         console.log("Currency: ", currency)
    },[currency])
    useEffect (() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)

       

        // json me se value nikalane ke liye chaining karenge
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo     //(05:34:10 Time video)