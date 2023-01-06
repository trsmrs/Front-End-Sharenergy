import { React } from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'

import '../styles/global.css'

const ModalConfirm = (
  { open,
    onClose,
    onConfirm,
    title,
    msg }
) => {

  return (
    <>
      
        <Dialog
          open={open}
          onClose={onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {title}
          </DialogTitle>
          <DialogContent sx={{bgcolor:'rgb(16, 28, 36)'}}>
            <DialogContentText id="alert-dialog-description">
              {msg}
            </DialogContentText>
          </DialogContent>
          <DialogActions  sx={{bgcolor:'rgb(16, 28, 36)'}}>
            <Button id="btn-modal" onClick={onClose}>Cancelar</Button>
            <Button id="btn-modal" onClick={onConfirm}>Confirmar</Button>
          </DialogActions>
        </Dialog>
      
    </>
  )
}


export default ModalConfirm