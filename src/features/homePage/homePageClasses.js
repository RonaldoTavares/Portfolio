import { makeStyles } from '@material-ui/core/styles';

const homePageClasses = makeStyles(() => ({
    body:{
        backgroundImage: 'linear-gradient(to left, #000 , #fff, #000)',
        width: '100%',
        height: '100vh'
    },
    container:{
        display: 'flex',
        justifyContent: 'center'
    },
    boxred:{
        borderStyle: 'solid',
        padding: '1%'
    },
    textTitle: {
        fontFamily: "'Bebas Neue', cursive",
        fontWeight: 1000,
        color: '#000',
        letterSpacing: '1px',
        fontSize: 30
    },
    textColor: {
        color: 'red'
    },
    text: {
        fontFamily: "'Bebas Neue', cursive",
        fontWeight: 1000,
        color: '#000',
        letterSpacing: '1px',
        fontSize: 12
    }
}));

export default homePageClasses