import {useState, useEffect } from 'react';


const Addproduct = () => {
    const [destinations , setdestiations] = useState([]);
    useEffect(()=>{
        const getdetails = () => {
            fetch("http://148.251.225.118:3200/api/detailed-transaction")
            .then(res=>{return res.json()})
            .then(response=>{
                var x = sessionStorage.getItem("id")
                console.log(sessionStorage.getItem("jwttoken"))
                console.log(response.transaction.transaction_list)
                var num = response.transaction.count

              
                console.log(num);

                for (let i =0;i < num;i++) {
                   
                    var id = response.transaction.transaction_list[i].id;
                    console.log(id,i);
                    if (x==id) {
                        console.log(response.transaction.transaction_list[i]);
                    }
                }
                setdestiations(response.transaction)
            })
            .catch(error=>{console.log(error)})
        }
        getdetails();

    },[]);
return (
    <div>

     
    </div>
)
}
export default Addproduct;