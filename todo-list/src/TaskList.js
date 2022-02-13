import * as React from 'react';
import favoriteImg from './img/favorite.png';
import notfavoriteImg from './img/notfavorite.png';
import trashImg from './img/trash.png';
import { Grid, Item, Table, TableBody, TableCell, TableRow, TableFooter, TablePagination } from '@mui/material';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

function TaskList(props) {

    const tasks = props.tasks;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    
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
            <Grid item xs={12}>
                
            </Grid>
            <Grid item xs={3}>
                
            </Grid>
            <Grid item xs={6} style={{ width: '100%' }}>
                <Table>
                    <TableBody>
                        {(rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows
                            ).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.task}</TableCell>
                                <TableCell>{IsFavoriteItem(row)}</TableCell>
                                <TableCell><img src={trashImg} style={{height: "50px", width: "50px"}} onClick={() => props.removeTask(row)}/></TableCell>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={3} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                            rowsPerPageOptions={[2]}
                            colSpan={3}
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
            <Grid item xs={12}>
                
            </Grid>
        </Grid>
    );
}

export default TaskList;