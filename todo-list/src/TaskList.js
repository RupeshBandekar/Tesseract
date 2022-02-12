import * as React from 'react';
import favoriteImg from './img/favorite.png';
import notfavoriteImg from './img/notfavorite.png';
import trashImg from './img/trash.png';

function TaskList(props) {

    const tasks = props.tasks;

    function displayTasks() {
        return tasks.map(function(item) {
            return <li key={item.taskId}>{formatItem(item)}</li>
        });
    };

    function formatItem(item) {
        return (
            <div style={{display: "inline"}}>
                <div>{item.task}</div>
                <div>{item.isFavorite ? <img src={favoriteImg} alt="click to remove from favorites" style={{height: "50px", width: "50px"}} /> : <img src={notfavoriteImg} alt="click to mark as favorite!" style={{height: "50px", width: "50px"}} /> }</div>
                <div><img src={trashImg} style={{height: "50px", width: "50px"}} /></div>
            </div>
        ); 
    };

    return(
        <ul>
            {displayTasks()}
        </ul>
    );
}

export default TaskList;