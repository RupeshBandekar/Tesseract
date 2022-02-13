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
        paddingLeft: "30px",
    },
    sortImg: {
        width: "70px",
        height: "56px",
        padding: "0px",
    },
    table:  {width: "98%", border:"solid", borderColor: "gray", borderWidth: "7px"},
    tableRow: {borderBottom: "solid", borderColor: "darkgray", borderWidth: "2px", fontSize: "20px"},
    "& .css-rqglhn-MuiTable-root": { width: "98%" }

}));