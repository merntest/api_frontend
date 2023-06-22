import {useState, useEffect } from 'react';


const Addproduct = () => {
    const [destinations , setdestiations] = useState([]);
    useEffect(()=>{
        const getdetails = () => {
            fetch("http://148.251.225.118:3200/api/detailed-transaction")
            .then(res=>{return res.json()})
            .then(response=>{
                var x = sessionStorage.getItem("id")
                console.log(response.transaction.transaction_list)
              
                console.log(x)
                setdestiations(response.transaction)
            })
            .catch(error=>{console.log(error)})
        }
        getdetails();

    },[]);
return (
    <div>
      hi 
    </div>
)
}
export default Addproduct;