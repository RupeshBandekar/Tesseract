import { makeStyles } from "@material-ui/core";

export const todoStyles = makeStyles((theme) => ({
    todoListHeader: {
        color:"white",
        border: "solid",
        borderColor: "#721605",
        borderWidth: "10px",
        padding: "15px",
        fontWeight: "bold",
        boxShadow: "2px 2px 20px -4px rgba(0, 0, 0, 0.6)",
        transition: "all 0.2s ease-in-out",
        fontSize: "40px",
        background: "#971c38",
        margin: "60px 0 5px 0",
    },
    searchBoxDiv: {
        paddingBottom: "5px",
    },
    searchBox: {
        boxShadow: "2px 2px 20px -4px rgba(0, 0, 0, 0.6)",
        transition: "all 0.2s ease-in-out",
        fontSize: "20px",
        background: "linear-gradient(-45deg, #ff4b2b, #ff416c)",
        "& label": {
            fontSize: "20px",
            color: "black",
        }
    },
    sortImgBox: {
        paddingLeft: "0px",
    },
    sortImgAscending: {
        width: "56px",
        height: "56px",
        padding: "0px",
        float: "right",
        transform: "rotate(0deg)",
        "&:hover": {
            cursor: "pointer",
        }
    },
    sortImgDescending: {
        width: "56px",
        height: "56px",
        padding: "0px",
        float: "right",
        transform: "rotate(180deg)",
        "&:hover": {
            cursor: "pointer",
        }
    },
    table:  {
        width: "98%",
    },
    tableRow: {
        boxShadow: "2px 2px 20px -4px rgba(0, 0, 0, 0.6)",
        transition: "all 0.2s ease-in-out",
        fontSize: "20px",
        background: "linear-gradient(-45deg, #ff4b2b, #ff416c)",
        borderRadius: "1.5rem",
    },
    taskCell: {
        width: "70%",
        fontSize: "25px",
        color:"#fde2e2",
        fontWeight: "500",
    },
    trashCell: {
        width: "15%",
        color:"#fde2e2",
        fontWeight: "500",
        "&:hover": {
            cursor: "pointer",
        },
    },
    favoriteCell: {
        width: "15%",
        color:"#fde2e2",
        fontWeight: "500",
        "&:hover": {
            cursor: "pointer",
        },
    },
}));