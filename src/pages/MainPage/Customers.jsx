import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    Grid,
    Card,
    Snackbar,
    Button,
    Container
} from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import '../../styles/global.css'
import theme from '../../styles/styled'
import { ThemeProvider } from '@mui/material/styles'
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
            <ThemeProvider theme={theme}>

                <Button variant="contained" href="/customers/add"
                    sx={{
                        marginTop: 10, marginLeft: 3, bgcolor:'#2a3942',
                        "&:hover": { bgcolor: '#212c33' }
                    }}
                >
                    Adicionar Cliente
                </Button>


                <Container maxWidth='lg' >

                    <Grid container className='efeito-vidro'
                        columns={{ xs: 2, sm: 4, md: 6 }}
                        display='flex'
                        borderRadius={4}
                        justifyContent="center"
                        alignItems='center'
                        sx={{ marginTop: 5 }}>


                        {
                            customers.map(item => (

                                <Card key={item._id}
                                    sx={{

                                        textAlign: 'center',
                                        margin: '12px 10px 20px 0',
                                        width: '342px',
                                        height: '100%',
                                        bgcolor:'#313e47'
                                    }}
                                >
                                    <CustomerCard

                                        id={item._id}
                                        name={item.name}
                                        cpf={item.cpf}
                                        email={item.email}
                                        phone={item.phone}
                                        address={item.address}

                                        onRemoveCustomer={() => handleRemoveCustomer(item._id)}
                                        onEditCustomer={handleEditCustomer}

                                    />

                                </Card>

                            ))

                        }
                    </Grid>
                </Container>

                <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                    <MuiAlert onClose={() => setOpen(false)} icon={false} sx={{
                        width: '100%',
                        color: 'white',
                        bgcolor: '#313e47'
                    }}>
                        Registro excluído com Sucesso!
                    </MuiAlert>
                </Snackbar>

            </ThemeProvider>
        </TemplateDefault>

    )
}


export default Customers