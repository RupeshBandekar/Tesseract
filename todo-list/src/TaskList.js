import * as React from 'react';
import favoriteImg from './img/favorite.png';
import notfavoriteImg from './img/notfavorite.png';
import trashImg from './img/trash.png';
import { Grid, Item, Table, TableBody, TableCell, TableRow, TableFooter, TablePagination } from '@mui/material';
import { todoStyles } from './style/application-style';

function TaskList(props) {

    const tasks = props.tasks;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const classes = todoStyles();
    
    const rows = tasks;

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    function IsFavoriteItem(item) {
        return item.isFavorite ?
        <img src={favoriteImg} style={{height: "50px", width: "50px"}} onClick={() => props.toggleFavoriteTask(item)}/> 
        : <img src={notfavoriteImg} style={{height: "50px", width: "50px"}} onClick={() => props.toggleFavoriteTask(item)} />
    }

    return(
        <Grid container spacing={2}>
            <Grid item xs={3}>                
            </Grid>
            <Grid item xs={6}>
                <Table colSpan={12} className={classes.table}>
                    <TableBody>
                        {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows
                            ).map((row) => (
                            <TableRow key={row.id} className={classes.tableRow}> 
                                <TableCell style={{width: "70%", fontSize: "25px"}}>{row.task}</TableCell>
                                <TableCell style={{width: "15%"}}>{IsFavoriteItem(row)}</TableCell>
                                <TableCell style={{width: "15%"}}><img src={trashImg} style={{height: "50px", width: "50px"}} onClick={() => props.removeTask(row)}/></TableCell>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={12} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                            rowsPerPageOptions={[4]}
                            colSpan={4}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Grid>
            <Grid item xs={3}>                
            </Grid>
        </Grid>
    );
}

export default TaskList;