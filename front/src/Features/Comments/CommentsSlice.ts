import { IComment } from '../../types';
import {createSlice } from '@reduxjs/toolkit';

interface ICommentsSlice{
  allComments: IComment[];
  fetchComments:boolean,
  postComments:boolean
}


const initialState:ICommentsSlice = {
  allComments:[],
  fetchComments:false,
  postComments:false,
}

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers:{

  },
  extraReducers:(builder)=>{

  },
  selectors:{

  }
});


export const commentsReducer =  commentsSlice.reducer
export const {} = commentsSlice.actions
export const {} = commentsSlice.selectors