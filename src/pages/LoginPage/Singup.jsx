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
import { TemplateDefault } from "../../Templates/TemplateDefault"

const Signup = () => {
	const [error, setError] = useState("");
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		cpf: "",
		password: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/customers";
			const { data: res } = await axios.post(url, data);

			console.log(res.message);

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

	const clearInputs = () =>{
		
	}


	return (
		<TemplateDefault>
			<Container className="efeito-vidro" sx={{ border:'1px solid red', display: 'flex', borderRadius: 6, textAlign: 'center', marginTop: 13, width: '100%' }}>
				<form onSubmit={handleSubmit}>
					<FormControl>
						<Typography variant="h5" component="h5" sx={{ color: '#fff', fontWeight: 600, marginTop: 1, position: 'relative' }}>Cadastro de Clientes</Typography>

						<FormLabel sx={{ color: '#fff', textAlign: 'left', fontWeight: 600, marginBottom: 1 }}>Usuário</FormLabel>
						<TextField sx={{ bgcolor: '#fff', marginBottom: 3, width: 500 }}
							type="name"
							placeholder="Nome"
							name="name"
							onChange={handleChange}
							value={data.name}
							required />

					</FormControl>
					<FormControl size="small">
						<FormLabel sx={{ color: '#fff', textAlign: 'left', fontWeight: 600, marginBottom: 1 }}>E-mail</FormLabel>
						<TextField sx={{ bgcolor: '#fff', marginBottom: 3, width: 500 }}
							type="email"
							placeholder="E-mail"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
						/>
					</FormControl>
					<FormControl>
						<FormLabel sx={{ color: '#fff', textAlign: 'left', fontWeight: 600, marginBottom: 1 }}>Telefone</FormLabel>
						<TextField sx={{ bgcolor: '#fff', marginBottom: 3, width: 500 }}
							type="text"
							placeholder="Telefone"
							name="phone"
							onChange={handleChange}
							value={data.phone}
							required
						/>
					</FormControl>

					<FormControl>
						<FormLabel sx={{ color: '#fff', textAlign: 'left', fontWeight: 600, marginBottom: 1 }}>Endereço</FormLabel>
						<TextField sx={{ bgcolor: '#fff', marginBottom: 3, width: 500 }}
							type="text"
							placeholder="Endereço"
							name="address"
							onChange={handleChange}
							value={data.address}
							required
						/>
					</FormControl>

					<FormControl>
						<FormLabel sx={{ color: '#fff', textAlign: 'left', fontWeight: 600, marginBottom: 1 }}>CPF</FormLabel>
						<TextField sx={{ bgcolor: '#fff', marginBottom: 3, width: 500 }}
							type="text"
							placeholder="CPF"
							name="cpf"
							onChange={handleChange}
							value={data.cpf}
							required
						/>
					</FormControl>

					<FormControl>
						<FormLabel sx={{ color: '#fff', textAlign: 'left', fontWeight: 600, marginBottom: 1 }}>Senha</FormLabel>
						<TextField sx={{ bgcolor: '#fff', marginBottom: 3, width: 500 }}
							type="password"
							placeholder="Senha"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
						/>
					</FormControl>

					<FormControl>
						<Button sx={{
							bgcolor: '#d8d5da', color: '#000', width: 400, margin: '30px',
							"&:hover": { bgcolor: '#7a4f6a', color: '#fff' }
						}}
							type="submit"
							fullWidth
						>Cadastrar</Button>
						<Typography variant="span" component="span" sx={{ color: '#fff', marginTop: 1 }}>
							{error}
						</Typography>
					</FormControl>

				</form>
			</Container>
		</TemplateDefault>
	)
};

export default Signup