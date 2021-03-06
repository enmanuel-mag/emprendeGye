import { createStyles, makeStyles, withStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

export default makeStyles((theme) =>
  createStyles({
    button: {
      minHeight: '100%',
      minWidth: '100%',
      padding: '0',
      fontSize: '20px',
    },

    app: {
      marginTop: '10px',
    },
    text: {
      fontWeight: 'bold',
      marginTop: '1rem',
    },
    root: {
      borderRadius: '10px',
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      borderRadius: '10px',
      position: 'relative',
      width: '85%',
      height: 150,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          borderRadius: '10px',
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      borderRadius: '10px',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      borderRadius: '10px',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      borderRadius: '10px',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
        theme.spacing(1) + 6
      }px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      borderRadius: '10px',
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  })
);
export const ColorButton = withStyles((theme) => ({
  root: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#cdcdcd',
    },
    flexDirection: 'column',
  },
}))(Button);
