import { makeStyles } from '@material-ui/core/styles';

const HeaderClasses = makeStyles(() => ({
resetStyle : {
    margin: '0px',
    padding: '0px',
    listStyle: 'none',
    fontSize: '1.2rem',
    fontFamily: 'Arial'
},
a: {
    textDecoration: 'none',
    color: '#FFF',
    fontFamily: "'Ropa Sans', sans-serif",
    letterSpacing:'2px',
    '&:hover, &:focus': {
        color: '#2a5099'
      }
},
header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundImage: 'linear-gradient(to left, #000 , #808080, #000)'
},
menu: {
    display: 'flex',
    justifyContent: 'space-between'
},
li: {
    marginLeft: '10px'
},
itemHeader: {
    padding: '10px',
},
img:{
    color: '#fff',
    width:'8%',
}

}));

export default HeaderClasses