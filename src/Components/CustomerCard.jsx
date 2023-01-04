import React, { useState } from 'react'
import {
  Chip,
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
} from '@mui/material'


import ModalConfirm from '../modals/ModalConfirm'


const CustomerCard = ({
  id,
  name,
  email,
  phone,
  address,
  cpf,

  onRemoveCustomer,
  onEditCustomer,

}) => {

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = () => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
    handleClick()
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }

  const handleEditCustomer = (id) => {
    onEditCustomer(id)
  }

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (

    <>
      <Grid container spacing={1}
        justifyContent="center"
        alignItems='center'
        marginTop={15}
        

      >
        <Card sx={{ width: 350 }} >
          
            <Card>

              <CardContent sx={{
                color: '#dbcccc',
                bgcolor: 'rgb(110 70 103)',
                border: '1px solid white',
                padding: 2,
                textAlign: 'center',
                margin: '5px 10px 10px 7px',
                width: '300px',
                height: '150px',

              }}>
                <Typography textAlign='center' variant="body2" color="text.secondary">

                  Nome: {name} <br></br>
                  Email: {email}<br></br>
                  Telefone: {phone}<br></br>
                  Endereço: {address}<br></br>
                  CPF: {cpf}<br></br>
                </Typography>
              </CardContent>
            </Card>

          <CardContent>
            <Typography variant="body2" color="text.secondary">

            </Typography>
          </CardContent>
          <CardActions sx={{justifyContent:'space-evenly'}}>

            <Chip color="primary" label="Editar" onClick={() => handleEditCustomer(id)}/>
            <Chip color="primary" label="Excluir" onClick={handleRemoveCustomer}/>

          </CardActions>
        </Card>
      </Grid>
      <ModalConfirm
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={() => handleConfirmModal(id)}
        title="Excluir cadastro."
        msg="Deseja realmente excluir este usuário?"
      />
      {/* <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert onClose={handleClose} icon={false} sx={{
            width: '100%',
            color: 'white',
            bgcolor: 'rgb(46 10 40)'
          }}>
            Registro excluído com Sucesso!
          </MuiAlert>
        </Snackbar>
      </Stack> */}
    </>

  )
}

export default CustomerCard
