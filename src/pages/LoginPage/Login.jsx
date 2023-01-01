import {
    Button,
    Container,
    FormControl,
    FormLabel,
    TextField,
    Typography,
} from "@mui/material"
import { useState } from "react"
// Custom imports
import '../../styles/global.css'
import TemplateDefault from "../../Templates/TemplateDefault"
import { HandlerLogin } from "../../Controllers/HandlerLogin"

const LoginPage = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    HandlerLogin(user, pass)
    

    return (
        <TemplateDefault>
            <Container className="efeito-vidro" sx={{display:'grid', borderRadius: 6, padding: '56px 8px 0px', textAlign: 'center', marginTop: 20, width: 400, height: 450 }}>

                <form >
                    <Typography variant="h5" component="h5" sx={{ color: '#fff', fontWeight: 600, marginTop: 1, position: 'relative', top: '-33px' }}>Logar</Typography>
                    <FormControl fullWidth>
                        <FormLabel sx={{ color: '#fff', textAlign: 'left', fontWeight: 600, marginBottom: 1 }}>Usuário</FormLabel>
                        <TextField sx={{ bgcolor: '#fff', marginBottom: 3 }}
                            type='text'
                            placeholder='Usuário'
                            value={user}
                            onChange={(e)=>setUser(e.target.value)}
                            variant="outlined"
                            required
                            autoComplete="username"

                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <FormLabel sx={{ color: '#fff', textAlign: 'left', fontWeight: 600, marginBottom: 1 }}>Senha</FormLabel>
                        <TextField sx={{ bgcolor: '#fff' }}
                            type='password'
                            placeholder="Senha"
                            value={pass}
                            onChange={(e)=>setPass(e.target.value)}
                            variant="outlined"
                            required
                            autoComplete="new-password"

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
                    </FormControl>
                </form>
            </Container>
        </TemplateDefault>
    )
}


export default LoginPage