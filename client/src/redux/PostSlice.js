import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//add  Post
export const AddPost = createAsyncThunk("posts/AddPost",async (newPost, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post("/api/posts/", newPost, {
        headers: { token: localStorage.getItem("token") },
      });
      dispatch(GetPost());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

//get Post
export const GetPost = createAsyncThunk(
  "posts/GetPost", async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/api/posts/", { headers: { token: localStorage.getItem("token") }, });
      
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
// delete Post
export const DeletedPosts = createAsyncThunk( "posts/DeletedPosts", async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/api/posts/${id}`, {headers: { token: localStorage.getItem("token") },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


export const UpdatePosts = createAsyncThunk( "posts/UpdatePosts",async (PostWithNewComment, {rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.put( `/api/posts/${PostWithNewComment._id}`,PostWithNewComment, {headers: { token: localStorage.getItem("token") },
      });
      dispatch(GetPost());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const DeleteComments = createAsyncThunk( "posts/DeleteComments",async ({idPost , idComment}, { rejectWithValue,dispatch }) => {
  try {
    const { data } = await axios.put( `/api/posts/?idPost=${idPost}&idComment=${idComment}`,{}, {headers: { token: localStorage.getItem("token") },
    });
    dispatch(GetPost());
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
}
);



const PostSlice = createSlice({
  name: "post",
  initialState: {
    isLoading: false,
    posts: [],
    comments:[],
    msg: null,
    Errors: null,
    isAuth: Boolean(localStorage.getItem("isAuth")),
    token: localStorage.getItem("token"),
  },
  reducers: {},
  extraReducers: {
    [AddPost.pending]: (state) => {
      state.isLoading = true;
      state.Errors = null;
    },
    [AddPost.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      state.msg = payload.msg;
    },
    [AddPost.rejected]: (state, { type, payload }) => {
      state.Errors = payload;
    },

    [GetPost.pending]: (state) => {
      state.isLoading = true;
      state.Errors = null;
    },
    [GetPost.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      state.posts = payload;
    },
    [GetPost.rejected]: (state, { type, payload }) => {
      state.Errors = payload;
    },
    [DeletedPosts.pending]: (state) => {
      state.isLoading = true;
      state.Errors = null;
    },
    [DeletedPosts.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      const deleted = state.posts.filter(
        (el) => el._id !== payload.DeletedPost._id
      );
      state.posts = deleted;
    },
    [DeletedPosts.rejected]: (state, { type, payload }) => {
      state.Errors = payload;
    },
    // lil comments
      [UpdatePosts.pending]: (state) => {
      state.isLoading = true;
    },
    [UpdatePosts.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      state.comments = state.comments.map((el) =>
        el._id === payload._id ? { ...el, ...payload } : el);

    },
    [UpdatePosts.rejected]: (state, { type, payload }) => {
      state.Errors = payload;
    },
    
    [DeleteComments.pending]: (state) => {
      state.isLoading = true;
    },
    [DeleteComments.fulfilled]: (state, { type, payload }) => {
      state.isLoading = false;
      state.msg =payload.msg 

    },
    [DeleteComments.rejected]: (state, { type, payload }) => {
      state.Errors = payload;
    },
    
  },
});

export default PostSlice.reducer;
