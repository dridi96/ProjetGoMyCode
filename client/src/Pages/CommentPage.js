import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { BiMessageAdd } from 'react-icons/bi'
import { UpdatePosts } from '../redux/PostSlice'
import { useDispatch } from 'react-redux';


const CommentPage = ({el}) => {
   
    const dispatch = useDispatch()
    const [newComment, setNewComment] = useState({_id:el._id})
      
        const HandleChange = (e)=>{
            setNewComment({...newComment, [e.target.name]: e.target.value})
        }
        
      
        const Updating=()=>{
            dispatch(UpdatePosts(newComment))
            document.getElementById("commentText").value=''
        }
       
return (
    <div className='ps-3'>
      
    <div className="sidebar-btn-wrapper"
    style={{
    padding: '20px 5px',
    // margin:'0px 90px',
    }}>
<div>
    
            <form className="Comment__form">
            <TextField 
            id="commentText" 
            label="Add Comment"   
            size="small" 
            name="text"
            onChange={HandleChange}
            // value={newComment}
            />
            <Button  className='buttonC' onClick={Updating}  >
            <BiMessageAdd className='C'  />
            </Button>
            
            </form>
            </div>
    </div>
    </div>
)
}

export default CommentPage