import React,{useState,useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { addTaskItems } from '../../redux'
import "../../App.css"


const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.4), 0px 6px 10px 0px rgba(0,0,0,0.3), 0px 1px 18px 0px rgba(0,0,0,0.2)",
        background:"white"
    },
    borderfield:{
        textAlign:'center'
    },
    button: {
        marginTop: 14,
        fontFamily: "'Kirang Haerang', cursive"
    }
});

function InputTask(props) {
    const classes = useStyles();
    const [addTask, setAddTask] = useState('')
    const [error, setError] = useState('')
    useEffect(() => {
        if (props.currentTodo===null) {
            setAddTask('')
        } else {
            setAddTask(props.currentTodo)         
        }
    }, [props.currentTodo])
    
    const submitTaskHandler=(e)=>{
        e.preventDefault()
        if(addTask===''){
            setError('Fill the todo')
        }
        else{
            props.addTaskItems(addTask)
            setAddTask('')
            setError('')
        }

    }

    const handleChange = (e) => {
        const data=e.target.value
        setAddTask(data);
    }
    
    return (
        <div>
            <Container maxWidth="sm" className={classes.root}>
                <form onSubmit={submitTaskHandler}>
                    <Grid container alignItems="center">
                        <Grid item md={12}>
                            <TextField value={addTask}  onChange={handleChange} error={!!error} helperText={!!error}
                            id="outlined-basic" fullWidth label="Enter Title" multiline variant="outlined" required/>
                        </Grid>
                        <br/>
                        <Grid item md={12} className={classes.borderfield}>
                            <Button className={classes.button} variant="contained" color="primary" type='submit'>
                                {props.isEdit?'Edit':'Add'}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        todos:state.todos,
        currentTodo:state.currentTodo,
        isEdit:state.isEdit
    }
}

const mapDispatchToProps=dispatch=>{
    return{
       addTaskItems:(addTask)=>dispatch(addTaskItems(addTask))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(InputTask)

