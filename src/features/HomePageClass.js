import { makeStyles } from '@material-ui/core/styles';
import image from '../assets/img/predios.jpg'

const homePageStyles = makeStyles(() => ({
    gridContainer: {
        height: '100vh',
        background: 'url(' + image + ') no-repeat'
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
    button: {
        color: '#FFF',
        fontFamily: "'Poppins', sans-serif",
        textAlign: 'center',
        fontSize: 12,
        '&:hover, &:focus': {
            boxShadow: '0px 0px 10px #608baa',
            background: '#608baa',
            color: '#FFF'
        }
    }
}));

export default homePageStyles