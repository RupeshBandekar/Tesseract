import { makeStyles } from "@material-ui/core";

export const todoStyles = makeStyles((theme) => ({
    todoListHeader: {
        backgroundColor: "lightgray",
        border: "solid",
        borderColor: "gray",
        borderWidth: "10px",
        padding: "15px",
        fontSize: "40px",
        fontWeight: "bold",
        marginBottom: "15px",
    },
    searchBox: {
        fontSize: "20px",
    },
    sortImg: {
        width: "70px",
        height: "56px",
        padding: "0px",
    },
    textField: {
        marginLeft: theme.spacing(1),    
        marginRight: theme.spacing(1),    
        "& label.MuiInputLabel-outlined.MuiInputLabel-shrink": {    
          transform: "translate(14px, -6px) scale(0.75)",    
        },    
        "& label.MuiInputLabel-outlined": {    
          transform: "translate(10px, 10px) scale(1)",    
        },    
        "& input.MuiOutlinedInput-input": {    
          padding: "7px 7px 7px 7px",    
        },    
      },
}));