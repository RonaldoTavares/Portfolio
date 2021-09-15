import { makeStyles } from '@material-ui/core/styles';

const itemListClasses = makeStyles(() => ({
    button:{
        backgroundColor: '#C0C0C0',
        fontFamily: "'Bebas Neue', cursive",
        display : 'flex',
        justifyContent: 'initial',
        alignItems: 'center',
        width: '50%',
        marginLeft: '25%',
        boxShadow  : '0 0 1em #000',
        '&:hover': {
            boxShadow  : '0 0 2em #000',
            backgroundColor: '#A9A9A9'
        }
    },
    space: {
        width: '28%'
    }
}));

export default itemListClasses