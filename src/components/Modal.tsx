import React, { FunctionComponent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface ModalProps {
  open: boolean,
  title: string,
  onCancel?: () => void,
}

export const Modal: FunctionComponent<ModalProps> = (props) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      open={props.open}
      fullScreen={fullScreen}
      onClose={props.onCancel}
    >
      <DialogTitle>
        {props.title}
      </DialogTitle>
      <DialogContent>
        {props.children}
      </DialogContent>
    </Dialog>
  );
}