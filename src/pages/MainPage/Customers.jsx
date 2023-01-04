import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    Grid,
    Snackbar,
} from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import '../../styles/global.css'
import { TemplateDefault } from '../../Templates/TemplateDefault'
import CustomerCard from '../../Components/CustomerCard'


const Customers = () => {
    const [customers, setCustomers] = useState([])
    const [open, setOpen] = useState(false)
    let navigate = useNavigate()


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

    const handleEditCustomer = (id) => {
        navigate(`/customers/edit/${id}`)

    }


    const handleRemoveCustomer = (id) => {
        axios.delete(`http://127.0.0.1:8080/api/customers/${id}`)
            .then(() => {
                const newCustomersState = customers.filter(customer => customer._id !== id)
                setOpen(true)

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

                        <Grid key={item._id}>
                            <CustomerCard

                                id={item._id}
                                name={item.name}
                                email={item.email}
                                phone={item.phone}
                                address={item.address}
                                cpf={item.cpf}


                                onRemoveCustomer={() => handleRemoveCustomer(item._id)}
                                onEditCustomer={handleEditCustomer}
                            />
                        </Grid>
                    ))

                }
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                <MuiAlert onClose={() => setOpen(false)} icon={false} sx={{
                    width: '100%',
                    color: 'white',
                    bgcolor: 'rgb(46 10 40)'
                }}>
                    Registro excluído com Sucesso!
                </MuiAlert>
            </Snackbar>


        </TemplateDefault>

    )
}


export default Customers