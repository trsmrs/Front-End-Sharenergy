import { useState } from "react"
import axios from "axios"
import {
    Button,
    TextField,
    Snackbar,
    Stack,
    Container,
    FormControl,
} from "@mui/material"
import MuiAlert from '@mui/material/Alert'

import '../../styles/global.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../styles/styled'
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

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://127.0.0.1:8080/api/customers`, {

            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            cpf: form.cpf.value,

        }).then((response) => {
            handleClick()

        }).catch((error) => {
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
            <ThemeProvider theme={theme}>
                <Container className="efeito-vidro" component='form'
                    maxWidth='xs'
                    onSubmit={handleSubmit}
                    sx={{
                        marginTop: 15,
                        borderRadius: 10,
                        height: 500


                    }}>

                    <FormControl sx={{ width: '100%', marginTop: 3}}>
                   
                        <TextField inputProps={{className: 'withness'}}
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

                        <TextField inputProps={{className: 'withness'}}
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

                        <TextField inputProps={{className: 'withness'}}
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
                        <TextField inputProps={{className: 'withness'}}
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
                        <TextField inputProps={{className: 'withness'}}
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
                          bgcolor: 'rgb(19, 28, 36)', color: '#ffffff',
                          "&:hover": { bgcolor: 'rgb(12, 18, 24)', color: '#fff' }
                      }}
                            type="submit"
                        >Cadastrar</Button>


                    </FormControl>
                </Container>

                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <MuiAlert onClose={handleClose} severity="success" sx={{
                            width: '100%',
                            color: 'white',
                            bgcolor: 'rgb(16, 28, 36)'
                        }}>
                            Cadastro Criado com Sucesso!
                        </MuiAlert>
                    </Snackbar>
                </Stack>

            </ThemeProvider>
        </TemplateDefault>

    )
}



export default CustomersAdd