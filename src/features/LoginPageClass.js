import { makeStyles } from '@material-ui/core/styles';
import image from '../assets/img/predios.jpg'

const loginPageStyles = makeStyles(() => ({
    gridContainer: {
        height: '100vh',
        background: '#000'
      },
    boxlogin: {
        boxShadow: '0 0 3em black',
        background: 'linear-gradient(rgba(145,145,145,0.22),rgba(145,145,145,0.05))',
        borderRadius: 8
    },
    text: {
        fontFamily: "'Poppins', sans-serif",
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20
    },
    buttonLogin: {
        color: '#FFF',
        fontFamily: "'Poppins', sans-serif",
        textAlign: 'center',
        fontSize: 12
    }
}));

export default loginPageStyles