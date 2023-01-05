import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import {
    Button,
    TextField,
    Snackbar,
    Stack,
    FormControl,
    Container,

} from "@mui/material"
import MuiAlert from '@mui/material/Alert'

import '../../styles/global.css'
import { TemplateDefault } from "../../Templates/TemplateDefault"

const CustomersEdit = () => {
    const { id } = useParams()
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

    async function getCustomer() {
        await axios.get(`http://127.0.0.1:8080/api/customers/${id}`)
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

    }

    useEffect(() => {
        getCustomer()
    }, [])


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

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.patch(`http://127.0.0.1:8080/api/customers/${id}`, {

            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            cpf: form.cpf.value,

        }).then((response) => {
            handleClick()
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
            <Container className="efeito-vidro" component='form'
                maxWidth='xs'
                onSubmit={handleSubmit}
                sx={{
                    marginTop: 15,
                    borderRadius: 10,
                    height: 500


                }}>

                <FormControl sx={{ width: '100%', marginTop: 3 }}>

                    <TextField
                        error={form.name.error}
                        label="Nome"
                        name="name"
                        value={form.name.value}
                        onChange={handleInputChange}
                        variant={"outlined"}
                        color='secondary'
                        required

                    />
                </FormControl>

                <FormControl sx={{ width: '100%', marginTop: 3 }}>

                    <TextField
                        error={form.name.error}
                        label="CPF"
                        name="cpf"
                        value={form.cpf.value}
                        onChange={handleInputChange}
                        variant={"outlined"}
                        color='secondary'
                        required
                    />

                </FormControl>

                <FormControl sx={{ width: '100%', marginTop: 3 }}>

                    <TextField
                        error={form.name.error}
                        label="E-mail"
                        name="email"
                        value={form.email.value}
                        onChange={handleInputChange}
                        variant={"outlined"}
                        color='secondary'
                        required
                    />

                </FormControl>

                <FormControl sx={{ width: '100%', marginTop: 3 }}>
                    <TextField
                        error={form.name.error}
                        label="Telefone"
                        name="phone"
                        value={form.phone.value}
                        onChange={handleInputChange}
                        variant={"outlined"}
                        color='secondary'
                        required
                    />

                </FormControl>

                <FormControl sx={{ width: '100%', marginTop: 3 }}>
                    <TextField
                        error={form.name.error}
                        label="Endereço"
                        name="address"
                        value={form.address.value}
                        onChange={handleInputChange}
                        variant={"outlined"}
                        color='secondary'
                        required
                    />

                </FormControl>
                <FormControl sx={{ width: '100%', marginTop: 3 }}>
                    <Button sx={{
                        bgcolor: '#ad98a9', color: '#000',
                        "&:hover": { bgcolor: '#7a4f6a', color: '#fff' }
                    }}
                        type="submit"
                    >Salvar</Button>


                </FormControl>
            </Container>

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


        
        </TemplateDefault >

    )
}



export default CustomersEdit