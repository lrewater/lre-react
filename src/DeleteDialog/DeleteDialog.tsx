import React, { useReducer } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

export interface Props {
  handleDelete: () => void;
}

export type State = {
  visible: boolean;
};

export type Action = {
  type: 'show' | 'hide';
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'show':
      return { visible: true };
    case 'hide':
      return { visible: false };
    default:
      return state;
  }
}

const initialState = { visible: false };

const DeleteDialog: React.FC<Props> = props => {
  const { handleDelete } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  function dialogHandler(consent: string) {
    if (consent === 'agree') {
      handleDelete();
    }
    dispatch({ type: 'hide' });
  }

  return (
    <div>
      <Tooltip title="Delete" onClick={() => dispatch({ type: 'show' })}>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={state.visible}
        onClose={() => dispatch({ type: 'hide' })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Record Delete'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this record(s)? Doing so cannot be
            undone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dialogHandler('disagree')} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => dialogHandler('agree')}
            color="secondary"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
