import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sideBar: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'grey',
    minHeight: '100%',
    background: 'transparent',
    border: 'hidden',
    boxShadow: 'none',
  },
  link: {
    textDecoration: 'none',
    marginBottom: '2rem',
    fontSize: '1rem',
    fontFamily: '"Open Sans", "sans-serif", "Roboto"',
    fontWeight: 700,
    color: 'grey',

    '&:hover': {
      color: 'black',

      '&:visited': {
        color: 'black',
      },
    },

    '&:visited': {
      color: 'grey',
    },
  },
}));

export default useStyles;
