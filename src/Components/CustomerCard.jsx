import React, { useState } from 'react'
import {
  Chip,
  Box,
  Container,
  Typography


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
      <Container sx={{ bgcolor: 'rgb(110 70 103)',  height: '250px', paddingTop: 2 }}>
        <Typography pt={.1}>
          Nome: {name}
        </Typography>

        <Typography pt={.1}>
          CPF: {cpf}
        </Typography>

        <Typography pt={.1}>
          E-mail: {email}
        </Typography>

        <Typography pt={.1}>
          Telefone: {phone}
        </Typography>

        <Typography pt={.1}>
          Endereço: {address}
        </Typography>
      </Container>


      <Box sx={{ margin: '20px 0 10px 0', display:'flex' ,justifyContent:'space-evenly'}}>
        <Chip label='Editar' sx={{
          bgcolor: "#462c40",
          color: '#fff',
          
          width: '20%'
        }}
          onClick={() => handleEditCustomer(id)} />
        <Chip label='Excluir' sx={{
          bgcolor: "#462c40",
          color: '#fff',
          
          width: '20%'
        }}
          onClick={() => handleRemoveCustomer()} />
      </Box>













      <ModalConfirm
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={() => handleConfirmModal(id)}
        title="Excluir cadastro."
        msg="Deseja realmente excluir este usuário?"
      />


    </>

  )
}

export default CustomerCard
