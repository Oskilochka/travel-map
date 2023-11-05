import {makeStyles} from "@mui/styles";

export default makeStyles((theme: any) => ({
    formControl: {
        minWidth: 200,
        marginBottom: '30px',
    },
    loading: {
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrap: {
        padding: '25px',
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '75vh',
        overflow: 'auto',
    },
}));
