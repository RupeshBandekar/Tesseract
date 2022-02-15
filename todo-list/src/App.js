import { Button, Grid, InputLabel, Paper, TextField } from "@mui/material";
import React from "react";
import { todotasks } from './data/todotasks';
import TaskList from "./TaskList";
import { todoStyles } from './style/application-style';
import sortImg from './img/sort.png';


function App() { 
  const [tasks, setTasks] = React.useState(todotasks);
  const [newEntry, setNewEntry] = React.useState("");
  const [sortAsc, setSortAsc] = React.useState(true);
  const [filteredTasks, setFileterdTasks] = React.useState(tasks);  

  const classes = todoStyles();

  function handleOnChange(e) {
    setNewEntry(e.target.value);
    const list = tasks.filter((item) => (item.task.startsWith(e.target.value)));
    setFileterdTasks(list);
  };

  function handleOnKeyPress(e) {
    if (e.key === "Enter") {
      if (newEntry.trim().length) {
        const newTask = [{ id: Math.random(), task: newEntry, isFavorite: false  }];
        if (!filteredTasks?.length) {
          const list = [...tasks, ...newTask];
          setTasks(list);
          setNewEntry("");
        }
      }
    }
  };

  function sortTasks(){
    let list = newEntry?.length ? [...filteredTasks] : [...tasks];
    if (sortAsc) {
      list.sort((a, b) => {
        if (a.isFavorite === b.isFavorite) {
          return a.task < b.task ? -1 : 1;
        } else {
          return a.isFavorite > b.isFavorite ? -1 : 1;
        }
      });
    } else {
      list.sort((a, b) => {
        if (a.isFavorite === b.isFavorite) {
          return a.task > b.task ? -1 : 1;
        } else {
          return a.isFavorite > b.isFavorite ? -1 : 1;
        }
      });
    }
    setSortAsc(!sortAsc);

    if (newEntry?.length) {
      setFileterdTasks(list);
    } else {
      setTasks(list);
    }
  }

  function toggleFavoriteTask(item) {
    if (newEntry?.length) {
      const list = [...filteredTasks];
      const updatedList = list.map((obj) => {
        if (obj.id === item.id) {
          obj.isFavorite = !item.isFavorite;
        }
        return obj;
      });

      setFileterdTasks(updatedList);
    } else {
      const list = [...tasks];
      const updatedList = list.map((obj) => {
        if (obj.id === item.id) {
          obj.isFavorite = !item.isFavorite;
        }
        return obj;
      });

      setFileterdTasks(updatedList);
      setTasks(updatedList);
    }
  }

  function removeTask(item) {
    if (newEntry?.length) {
      const list = [...filteredTasks];
      list.forEach((obj) => {
        if (obj.id === item.id) {
          const index = list.indexOf(obj);
          if (index > -1) {
            list.splice(index, 1);
          }
        }
      });

      setFileterdTasks(list);
    } else {
      const list = [...tasks];
      list.forEach((obj) => {
        if (obj.id === item.id) {
          const index = list.indexOf(obj);
          if (index > -1) {
            list.splice(index, 1);
          }
        }
      });

      setFileterdTasks(list);
      setTasks(list);
    }
  }

  return (
    <Paper> 
      <Grid container spacing={2}>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.todoListHeader}>
              Todo list
              <img
                id="sort"
                src={sortImg}
                onClick={() => sortTasks()}
                className={ sortAsc ? classes.sortImgDescending : classes.sortImgAscending}
              />
            </p>
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6} className={classes.searchBoxDiv}>
            <TextField
              id="new-task"
              variant="outlined"
              label="Search or Enter your todo task"
              value={newEntry}
              onChange={(e) => handleOnChange(e)}
              onKeyPress={(e) => {handleOnKeyPress(e)}}
              fullWidth
              className={classes.searchBox}
            />
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <TaskList
              tasks={newEntry?.length ? filteredTasks : tasks}
              toggleFavoriteTask={(item) => toggleFavoriteTask(item)}
              removeTask={(item) => removeTask(item)}
            />
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default App;
