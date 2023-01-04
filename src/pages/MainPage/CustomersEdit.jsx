import { useState, useEffect } from "react"
import axios from 'axios'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { teal } from "@mui/material/colors";
import {
    Button,
    Snackbar,
    Stack,
} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import { useParams } from "react-router-dom";



const CustomersEdit = () => {
    const { _id } = useParams()

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
         axios.get(`http://127.0.0.1:8080/api/customers/${_id}`)
         .then(response => {
            const data = response.data
            console.log(data)
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
                },
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
    }, [_id])

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
    }

    const handleAddButton = async () => {
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

        await axios.patch(`http://127.0.0.1:8080/api/customers/${_id}`, {
            _id: _id,
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value,
            cpf: form.cpf.value,
        }).then((response) => {
            const result = response.data
            console.log(result)
            handleClick()
        }).catch(({ response }) => console.log(response))

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
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2, width: '400px', marginLeft: "15%" },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        error={form.name.error}
                        label="Nome"
                        name="name"
                        variant="standard"
                        value={form.name.value}
                        helperText={form.name.error ? form.name.helperText : ''}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <TextField
                        error={form.email.error}
                        label="E-mail"
                        name="email"
                        variant="standard"
                        value={form.email.value}
                        helperText={form.email.error ? form.email.helperText : ''}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <TextField
                        error={form.phone.error}
                        label="Telefone"
                        name="phone"
                        variant="standard"
                        value={form.phone.value}
                        helperText={form.phone.error ? form.phone.helperText : ''}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <TextField
                        error={form.address.error}
                        label="Endereço"
                        name="address"
                        variant="standard"
                        value={form.address.value}
                        helperText={form.address.error ? form.address.helperText : ''}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <TextField
                        error={form.cpf.error}
                        label="Cpf"
                        name="cpf"
                        variant="standard"
                        value={form.cpf.value}
                        helperText={form.cpf.error ? form.cpf.helperText : ''}
                        onChange={handleInputChange} />
                </div>
                <div>
                    <Box>
                        <Button sx={{ margin: 2, padding: ["5px 10px 0px 10px"] }}
                            variant="contained"
                            color='primary'
                            onClick={() => handleAddButton()}>
                            Salvar

                        </Button>
                    </Box>
                </div>
            </Box>


            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <MuiAlert onClose={handleClose} severity="success" sx={{
                        width: '100%',
                        color: teal['900'],
                        backgroundColor: teal['A400']
                    }}>
                        Cadastro Alterado com Sucesso!
                    </MuiAlert>
                </Snackbar>
            </Stack>

        </>
    )
}



export default CustomersEdit