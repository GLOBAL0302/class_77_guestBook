import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectAllComments, selectFetchComments } from './CommentsSlice.ts';
import { useCallback, useEffect } from 'react';
import { fetchAllCommentsThunk } from './CommentsThunk.ts';
import {CircularProgress, Grid2 } from '@mui/material';
import Comment from './Comment.tsx';

const Comments = () => {
  const dispatch = useAppDispatch();
  const allComments = useAppSelector(selectAllComments);
  const fetchCommentsLoading = useAppSelector(selectFetchComments);


  const fetchComments = useCallback(async () => {
    await dispatch(fetchAllCommentsThunk());
  }, []);

  useEffect(() => {
    void fetchComments();
  }, [fetchComments]);

  return (
    <>
      {fetchCommentsLoading ? <CircularProgress /> :  <Grid2
        sx={{
          height: '500px',
          overflowY: 'auto',
        }}
        marginBottom={10}
      >
        {allComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Grid2>}
    </>

  );
};

export default Comments;
