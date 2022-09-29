import React, { useEffect } from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { GetPost ,DeletedPosts} from '../redux/PostSlice';
import { FcFullTrash } from "react-icons/fc";
import { Button } from '@material-ui/core';
import { TbTrashOff } from "react-icons/tb";
import CommentPage from '../Pages/CommentPage';
import Listss from './Listss';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      
    
    },
    inline: {
      display: 'inline',
    },
  }));

const Collapses = () => {
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  const questions = useSelector(state => state.Post.posts);
  const Sort=[...questions]?.reverse()
  
  const dispatch = useDispatch();
  useEffect(() => {dispatch(GetPost())}, []);
  const user=JSON.parse(localStorage.getItem('user'))

  return (
    <div className="containerr" >
          {Sort?.map((el,id) => (
        <List key={id}
    style={{ bgcolor: 'background.paper',width: '100%', maxWidth: 800 }}
    component="nav"
    className={classes.root}
    >
      <ListItemButton onClick={handleClick}>
      <ListItem >
        <ListItemAvatar >
        <Avatar style={{ backgroundColor: '#086E7D' }}>{el.owner.FirstName[0].toUpperCase()}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<div className='fw-bold fs-5'>{el.owner.FirstName} {el.owner.LastName}</div>}
          secondary={
            <React.Fragment>
              <p>{el.createAt.replace('T',', ').slice(0,-5)}</p>
              <Typography
                component={'span'}
                variant="body2"
                className={classes.inline}
                color="textPrimary"
            >
            { el.Posting}
            </Typography>
            <div className='trash'>
            {(el.owner._id===user._id)? <Button onClick={()=>{dispatch(DeletedPosts(el._id))}}>
            <FcFullTrash size={26} />
            </Button>:<><Button ><TbTrashOff size={26} className='trs'/></Button></>}
            </div>
             
            </React.Fragment>
         }
        />
      </ListItem>
       
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
       
        <ListItemButton  >
            <div className='commentaires'  sx={{marginLeft:25}} >
   {/* comments */}
        {el.Comment?.map((element,ide)=>(<div key={ide} className='ps-5' ><Listss element={element} el={el}/> </div> ))} 
      <CommentPage el={el} className='ps-5'></CommentPage>
      </div>
          </ListItemButton>
          
      </Collapse>
    </List>
    ))}
    </div>
  )
}

export default Collapses
