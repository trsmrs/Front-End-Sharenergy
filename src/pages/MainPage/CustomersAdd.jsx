import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import {
    Button,
    TextField,
    Snackbar,
    Stack,
    Box,
    Container,

} from "@mui/material"
import MuiAlert from '@mui/material/Alert'

import '../../styles/global.css'
import { TemplateDefault } from "../../Templates/TemplateDefault"

const CustomersAdd = () => {
      const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        name: {
            value: "",
            error: false,
        },
        email: {
            value: "",
            error: false,
        },
        phone: {
            value: "",
            error: false,
        },
        address: {
            value: "",
            error: false,
        },
        cpf: {
            value: "",
            error: false,
        }

    })


    const handleClick = () => {
        setOpen(true);
        clearFields()

    }

    const handleClose = (event, reason) => {
        if (reason === 'click') {
            return;
        }

        setOpen(false);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: {
                value,

            },

        })

    }

    const handleSubmit = async () => {

        await axios.post(`http://127.0.0.1:8080/api/customers`, {

            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            cpf: form.cpf.value,

        }).then((response) => {
            handleClick()
            alert('Foi')


        }).catch((error)=>{
            alert(error)
        })

    }

    const clearFields = () => {
        setForm({
            name: {
                value: '',

            },
            email: {
                value: '',

            },
            phone: {
                value: '',

            },
            address: {
                value: '',

            },
            cpf: {
                value: '',

            }

        })

    }

    return (

        <TemplateDefault>
            <Container maxWidth='md' sx={{ border: '1px solid red' }}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        '& .MuiTextField-root': { m: 5, width: '45ch' },
                        display: 'flex',
                        position: 'relative',
                        marginLeft: '25%',
                        marginTop: '60px',
                    }}

                    autoComplete="off"

                >


                    <Box className='efeito-vidro' sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'column',
                        borderRadius: 10,



                    }}>
                        {/* <Typography variant="h5" component="h5" sx={{ color: '#fff'}}>Cadastro de Clientes</Typography> */}

                        <TextField sx={{ m: 21, width: '25ch' }}
                            error={form.name.error}
                            label="Nome"
                            name="name"
                            value={form.name.value}
                            onChange={handleInputChange}
                            variant={"outlined"}
                            color='secondary'
                            required
                        />

                        <TextField sx={{ m: 21, width: '25ch' }}
                            error={form.name.error}
                            label="CPF"
                            name="cpf"
                            value={form.cpf.value}
                            onChange={handleInputChange}
                            variant={"outlined"}
                            color='secondary'
                            required
                        />

                        <TextField sx={{ m: 21, width: '25ch' }}
                            error={form.name.error}
                            label="E-mail"
                            name="email"
                            value={form.email.value}
                            onChange={handleInputChange}
                            variant={"outlined"}
                            color='secondary'
                            required
                        />


                        <TextField sx={{ m: 21, width: '25ch' }}
                            error={form.name.error}
                            label="Telefone"
                            name="phone"
                            value={form.phone.value}
                            onChange={handleInputChange}
                            variant={"outlined"}
                            color='secondary'
                            required
                        />

                        <TextField sx={{ m: 21, width: '25ch' }}
                            error={form.name.error}
                            label="Endereço"
                            name="address"
                            value={form.address.value}
                            onChange={handleInputChange}
                            variant={"outlined"}
                            color='secondary'
                            required
                        />

                        <Button sx={{
                            bgcolor: '#ad98a9', color: '#000', width: 350, marginLeft: 6,
                            marginBottom: 4,
                            "&:hover": { bgcolor: '#7a4f6a', color: '#fff' }
                        }}
                            type="submit"
                        >Cadastrar</Button>


                    </Box>


                </Box>

                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <MuiAlert onClose={handleClose} severity="success" sx={{
                            width: '100%',
                            color: 'white',
                            bgcolor: 'rgb(46 10 40)'
                        }}>
                            Cadastro Criado com Sucesso!
                        </MuiAlert>
                    </Snackbar>
                </Stack>


            </Container>
        </TemplateDefault>

    )
}



export default CustomersAdd