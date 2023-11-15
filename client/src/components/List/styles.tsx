import {makeStyles} from "@mui/styles";

export default makeStyles((theme: any) => ({
    formControl: {
        minWidth: 200,
        marginBottom: '30px',
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrap: {
        padding: '25px',
    },
    list: {
        overflow: 'auto',
    },
}));
