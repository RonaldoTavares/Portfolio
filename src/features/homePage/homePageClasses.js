import { makeStyles } from '@material-ui/core/styles';

const homePageClasses = makeStyles(() => ({
    body:{
        backgroundImage: 'linear-gradient(to left, #000 , #fff, #000)',
        width: '100%',
        height: '100vh'
    }
}));

export default homePageClasses