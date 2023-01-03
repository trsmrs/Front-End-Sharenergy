import {React} from 'react'

import {Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@mui/material';


    const ModalConfirm = (
        {open,
        onClose,
        onConfirm,
        title,
        msg}
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
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {msg}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={onConfirm}>Confirmar</Button>
              </DialogActions>
            </Dialog>
          </>
        )
      }


      export default ModalConfirm