import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles(() => ({
    root: {
    },
    container: {
        display: "flex",
        height: "calc(100vh - 64px)"
    },
    item: {
        border: "1px solid blue"
    },
    itemFlexGrow: {
        flexGrow: 1,
        border: "1px solid red"
    }
}));
