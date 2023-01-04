import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import {
    Button,
    TextField,
    Snackbar,
    Stack,
    Box,
} from "@mui/material"
import MuiAlert from '@mui/material/Alert'

import '../../styles/global.css'
import { TemplateDefault } from "../../Templates/TemplateDefault"

const CustomersEdit = () => {
    const { id } = useParams()

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

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/customers/${id}`)
            .then(response => {
                const data = response.data

                setForm({
                    name: {
                        value: data.name,
                        error: false,
                    },
                    email: {
                        value: data.email,
                        error: false,
                    },
                    phone: {
                        value: data.phone,
                        error: false,
                    },
                    address: {
                        value: data.address,
                        error: false,
                    },
                    cpf: {
                        value: data.cpf,
                        error: false,
                    }

                })

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
    }, [id])

    const [open, setOpen] = useState(false);
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
        console.log(form, value)
    }

    const handleSubmit = () => {
        let hasError = false
        let newFormState = {
            ...form
        }
        if (!form.name.value) {
            hasError = true
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: "Digite o seu Nome"
            }
        }
        if (!form.email.value) {
            newFormState.email = {
                value: form.email.value,
                error: true,
                helperText: "Digite o seu E-mail"
            }
        }
        if (!form.phone.value) {
            hasError = true
            newFormState.phone = {
                value: form.phone.value,
                error: true,
                helperText: "Digite a sua Profissão"
            }
        }
        if (!form.address.value) {
            hasError = true
            newFormState.address = {
                value: form.address.value,
                error: true,
                helperText: "Digite a sua Profissão"
            }
        }
        if (!form.cpf.value) {
            hasError = true
            newFormState.cpf = {
                value: form.cpf.value,
                error: true,
                helperText: "Digite a sua Profissão"
            }
        }
        if (hasError) {

            return setForm(newFormState)
        }

        axios.patch(`http://127.0.0.1:8080/api/customers/${id}`, {

            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            cpf: form.cpf.value

        }).then(() => {
            handleClick()
            clearFields()
            setOpen(true)
        })
        // .catch((error) => {
        //     if (error.response) {
        //         console.log(error.response.data);
        //         console.log(form)
        //         console.log(error.response.status);
        //         console.log(error.response.headers);
        //     } else if (error.request) {
        //         console.log(error.request);
        //     } else {
        //         console.log('Error', error.message);
        //     }
        // })

    }

    const clearFields = () => {
        form.name.value = ""
        form.email.value = ""
        form.phone.value = ""
        form.address.value = ""
        form.cpf.value = ""
    }

    return (

        <>
            <TemplateDefault>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        '& .MuiTextField-root': { m: 5, width: '45ch' },
                        display: 'flex'
                    }}
                    noValidate
                    autoComplete="off"
                >


                    <Box className='efeito-vidro' sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop: '60px',
                        flexDirection: 'column',
                        marginLeft: '37%',
                        borderRadius: 10

                    }}>
                        {/* <Typography variant="h5" component="h5" sx={{ color: '#fff'}}>Cadastro de Clientes</Typography> */}

                        <TextField sx={{ m: 21, width: '25ch' }}
                            value={form.name.value}
                            label="Nome"
                            type="text"
                            name="name"
                            onChange={handleInputChange}
                            variant={"outlined"}
                            color='secondary'
                        />

                        <TextField sx={{ m: 21, width: '25ch' }}
                            value={form.cpf.value}
                            label="CPF"
                            type="text"
                            name="cpf"
                            onChange={handleInputChange}
                            variant={"outlined"}
                            color='secondary'
                        />

                        <TextField sx={{ m: 21, width: '25ch' }}
                            value={form.email.value}
                            label="E-mail"
                            type="text"
                            name="email"
                            onChange={handleInputChange}
                            variant={"outlined"}
                            color='secondary'
                        />


                        <TextField sx={{ m: 21, width: '25ch' }}
                            value={form.phone.value}
                            label="Telefone"
                            type="text"
                            name="phone"
                            onChange={handleInputChange}
                            variant={"outlined"}
                            color='secondary'
                        />

                        <TextField sx={{ m: 21, width: '25ch' }}
                            value={form.address.value}
                            label="Endereço"
                            type="text"
                            name="address"
                            onChange={handleInputChange}
                            variant={"outlined"}
                            color='secondary'
                        />

                        <Button sx={{
                            bgcolor: '#ad98a9', color: '#000', width: 350, marginLeft: 6,
                            marginBottom: 4,
                            "&:hover": { bgcolor: '#7a4f6a', color: '#fff' }
                        }}
                            type="submit"
                        >Alterar</Button>


                    </Box>


                </Box>

                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <MuiAlert onClose={handleClose} severity="success" sx={{
                            width: '100%',
                            color: 'white',
                            bgcolor: 'rgb(46 10 40)'
                        }}>
                            Cadastro Alterado com Sucesso!
                        </MuiAlert>
                    </Snackbar>
                </Stack>



            </TemplateDefault>
        </>
    )
}



export default CustomersEdit