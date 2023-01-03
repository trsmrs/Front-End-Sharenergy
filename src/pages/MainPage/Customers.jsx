import { useEffect, useState } from 'react'
import {
    Card,
    Grid,
    Typography,
} from '@mui/material'
import axios from 'axios'
import '../../styles/global.css'
import { TemplateDefault } from '../../Templates/TemplateDefault'
import CustomerCard from '../../Components/CustomerCard'


const Customers = () => {
    const [customers, setCustomers] = useState([])
    

    useEffect(() => {

        axios.get('http://127.0.0.1:8080/api/customers')
            .then((response) => {
                const data = response.data
                setCustomers(data)
                
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
            })

    }, [])

    //  aqui era pra retornar na url a página de editar junto com o id passado
    const handleEditCustomer = (id) =>{
        // navigate(`/customers/edit/${id}`)
        
    }

    const handleRemoveCustomer = (id) =>{
        axios.delete(`http://127.0.0.1:8080/api/customers/${id}`)
        .then(() => {
          const newCustomersState = customers.filter(customer => customer._id !==id)
          console.log(newCustomersState.id)
          setCustomers(newCustomersState)
        })
    }


    return (

        <TemplateDefault>

            <Grid container item xs={12} spacing={4}
                columns={{ xs: 2, sm: 4, md: 6 }}
                justifyContent="center"
                alignItems='center'

                >

                {
                    
                    customers.map(item => (
                        // key={item._id}
                        <Grid xs={2}>
                            <CustomerCard
                                
                                id={item._id}
                                name={item.name}
                                email={item.email}
                                phone={item.phone}
                                address={item.address}
                                cpf={item.cpf}


                            onRemoveCustomer ={handleRemoveCustomer}
                            // onEditCustomer ={handleEditCustomer}
                            />
                        </Grid>
                    ))
                    
                }
            </Grid>



        </TemplateDefault>

    )
}


export default Customers