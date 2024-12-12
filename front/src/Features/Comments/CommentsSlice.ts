import { IComment } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCommentsThunk, postCommentThunk } from './CommentsThunk.ts';

interface ICommentsSlice {
  allComments: IComment[];
  fetchComments: boolean;
  postComments: boolean;
}

const initialState: ICommentsSlice = {
  allComments: [],
  fetchComments: false,
  postComments: false,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCommentsThunk.pending, (state) => {
        state.fetchComments = true;
      })
      .addCase(fetchAllCommentsThunk.fulfilled, (state, { payload }) => {
        state.fetchComments = false;
        state.allComments = payload;
      })
      .addCase(fetchAllCommentsThunk.rejected, (state) => {
        state.fetchComments = false;
      });

    builder
      .addCase(postCommentThunk.pending, (state) => {
        state.postComments = true;
      })
      .addCase(postCommentThunk.fulfilled, (state) => {
        state.postComments = false;
      })
      .addCase(postCommentThunk.rejected, (state) => {
        state.postComments = false;
      });
  },
  selectors: {
    selectAllComments: (state) => state.allComments,
    selectFetchComments: (state) => state.fetchComments,
    selectPostComment: (state) => state.postComments,
  },
});

export const commentsReducer = commentsSlice.reducer;
export const {} = commentsSlice.actions;
export const { selectAllComments, selectPostComment, selectFetchComments } = commentsSlice.selectors;
