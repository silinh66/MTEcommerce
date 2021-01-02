import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=> ({
    root: {
        maxWidth: '100%'
    },
    media: {
        height: 100,
        width: 1,
        padding: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));