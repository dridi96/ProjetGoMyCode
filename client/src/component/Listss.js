import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { BsTrash2 } from "react-icons/bs"
import { useDispatch } from 'react-redux';
import { DeleteComments } from '../redux/PostSlice';
import { TbTrashOff } from "react-icons/tb";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    maxWidth: 360,
    
    },
    inline: {
      display: 'inline',
    },
  }));
  
const Listss = ({element,el}) => {
  const user=JSON.parse(localStorage.getItem('user'))
    const classes = useStyles();
    const dispatch = useDispatch();
  return (
    <div className='listeItem'  >
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar >
        <Avatar style={{ backgroundColor: '#7C3E66' }}>
            {element.owner.FirstName[0].toUpperCase()}
            </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<div className='fw-bold fs-5'>{element.owner.FirstName} {element.owner.LastName}</div>}
          secondary={
            <React.Fragment>
              <p>{element.date.replace('T',', ').slice(0,-5)}</p>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              {element.text}
              </Typography>
              <div className='trash'>
              {(element.owner._id===user._id)?  <Button>
              <BsTrash2 size={22} style={{color:'#086E7D'}} onClick={()=>dispatch(DeleteComments({idComment:element._id,idPost:el._id}))}/>
              </Button>:<><Button ><TbTrashOff size={26} className='trs'/></Button></>}
              </div>
            </React.Fragment>
        }
        />
      
      </ListItem>
      <Divider variant="inset" component="li" />  
    </List>
    </div>
  )
}

export default Listss