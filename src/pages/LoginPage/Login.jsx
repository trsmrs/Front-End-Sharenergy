import { useState } from "react"
import axios from "axios"
import {
    Button,
    Container,
    FormControl,
    FormLabel,
    TextField,
    Typography,
} from "@mui/material"
// Custom imports
import '../../styles/global.css'
 import {TemplateLogin} from "../../Templates/TemplateDefault"



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
            const url = "http://127.0.1:8080/api/admin";
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

  const handleClear = () =>{
   
    setData({password : ''})
  }
    
    return (
         <TemplateLogin>
            <Container maxWidth='xs' className="efeito-vidro" sx={{ display: 'grid', borderRadius: 6, padding: '56px 8px 0px', textAlign: 'center', marginTop: 10, height: 450 }}>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h5" component="h5" sx={{ color: '#fff', fontWeight: 600, marginTop: 1, position: 'relative', top: '-33px' }}>Logar</Typography>
                    <FormControl fullWidth>
                        <FormLabel sx={{ color: '#fff', textAlign: 'left', fontWeight: 600, marginBottom: 1 }}>Usuário</FormLabel>
                        <TextField sx={{ bgcolor: '#fff', marginBottom: 3 }}
                            type="name"
                            placeholder="User Name"
                            name="name"
                            onChange={handleChange}
                            value={data.name}
                            required
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <FormLabel sx={{ color: '#fff', textAlign: 'left', fontWeight: 600, marginBottom: 1 }}>Senha</FormLabel>
                        <TextField sx={{ bgcolor: '#fff' }}
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                        />
                    </FormControl>

                    <FormControl>
                        <Button sx={{
                            bgcolor: '#d8d5da', color: '#000', width: 200, margin: '30px',
                            "&:hover": { bgcolor: '#491d61', color: '#fff' }
                        }}
                            type="submit"
                            fullWidth
                        >Login</Button>
                        <Typography variant="span" component="span" sx={{ color: '#fff', marginTop: 1}}>
                           {error}
                        </Typography>
                    </FormControl>
                    
                </form>
            </Container>
        </TemplateLogin>
    )
}


export default LoginPage