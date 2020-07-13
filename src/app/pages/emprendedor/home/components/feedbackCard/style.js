import { createStyles, makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
export default makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    avatar: {
      backgroundColor: red[500],
    },

  }),
);
