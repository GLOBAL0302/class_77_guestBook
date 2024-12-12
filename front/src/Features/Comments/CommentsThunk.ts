import { createAsyncThunk } from '@reduxjs/toolkit';
import { IComment, ICommentForm } from '../../types';
import { axiosApi } from '../../axiosApi.ts';

export const fetchAllCommentsThunk = createAsyncThunk<IComment[], void>('Comments/fetchAllCommentsThunk', async () => {
  const response = await axiosApi.get('/comment');
  return response.data;
});

export const postCommentThunk = createAsyncThunk<void, ICommentForm>('Comments/PostCommentThunk', async (comment) => {
  const formData = new FormData();
  const keys = Object.keys(comment) as (keyof ICommentForm)[];
  keys.forEach((key) => {
    const value = comment[key];
    if (value !== null) {
      formData.append(key, value);
    }
  });

  await axiosApi.post('/comment', formData);
});
