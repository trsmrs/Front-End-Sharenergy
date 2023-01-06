import { useState } from "react"
import axios from "axios"
import {
    Button,
    Container,
    FormControl,
    FormLabel,
    TextField
} from "@mui/material"
// Custom imports
import '../../styles/global.css'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../../styles/styled'
import { TemplateLogin } from "../../Templates/TemplateDefault"



const LoginPage = () => {
    const [data, setData] = useState({ name: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
        setError('')
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://127.0.1:8080/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            handleClear()
            window.location = "/random";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    const handleClear = () => {

        setData({ password: '' })
    }

    return (
        <TemplateLogin>
            <ThemeProvider theme={theme}>

                <Container className="efeito-vidro" component='form'
                    maxWidth='xs'
                    onSubmit={handleSubmit}
                    sx={{
                        marginTop: 15,
                        borderRadius: 10,



                    }}>
                    <FormControl sx={{ width: '100%', marginTop: 10 }}>
                        <FormLabel sx={{ fontWeight: 800, color: '#fff' }}>Usuário</FormLabel>
                        <TextField inputProps={{className: 'withness'}}
                            type="name"
                            placeholder="Usuário"
                            name="name"
                            color="secondary"
                            onChange={handleChange}
                            value={data.name}
                            required
                        />

                    </FormControl>

                    <FormControl sx={{ width: '100%', marginTop: 5 }}>
                        <FormLabel sx={{ fontWeight: 800, color: '#fff' }}>Senha</FormLabel>
                        <TextField inputProps={{className: 'withness'}}
                            type="password"
                            placeholder="Senha"
                            name="password"
                            color="secondary"
                            onChange={handleChange}
                            value={data.password}
                            required
                        />

                    </FormControl>
                    <FormControl sx={{ width: '100%', marginTop: 10 }}>
                        <Button sx={{
                            bgcolor: 'rgb(19, 28, 36)', color: '#ffffff',
                            "&:hover": { bgcolor: 'rgb(12, 18, 24)', color: '#fff' }
                        }}
                            type="submit"
                        >Logar</Button>
                    </FormControl>

                    <FormControl sx={{ width: '100%', marginLeft: 13, marginTop: 2 }}>
                        <FormLabel sx={{ color: "white" }}>{error}</FormLabel>
                    </FormControl>
                </Container>
            </ThemeProvider>
        </TemplateLogin>
    )
}


export default LoginPage