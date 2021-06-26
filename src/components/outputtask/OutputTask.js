import React from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { deleteTaskItem,editTaskItem } from '../../redux'
import "../../App.css"

const useStyles = makeStyles({
    container: {
        padding: 16,
    },
    defaultText:{
        textAlign:"center",
        fontFamily: "'Kanit', sans-serif"
    },
    listText:{
        fontFamily:"'Secular One', sans-serif"
    }
});

function OutputTask(props) {
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.container} maxWidth="md">
                {props.todos.length>0?
                    props.todos.map((todo,index)=>(
                    <List key={index}>
                            <ListItem button className={classes.listText}>
                                <ListItemText primary={todo}/>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="edit" onClick={()=>props.deleteTaskItem(todo)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton edge="end" aria-label="delete" onClick={()=>props.editTaskItem(todo)}>
                                        <EditIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>   
                            </ListItem>
                        </List>
                        ))
                :<Typography variant="h5" color="error" className={classes.defaultText}>Add a todo to get started</Typography>}
            </Container>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        todos:state.todos
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        deleteTaskItem:(todos)=>dispatch(deleteTaskItem(todos)),
        editTaskItem:(todos)=>dispatch(editTaskItem(todos))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OutputTask)

