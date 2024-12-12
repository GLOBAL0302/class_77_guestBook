import { CardMedia, Grid2, Typography } from '@mui/material';
import { IComment } from '../../types';
import * as React from 'react';
import noPic from '../../assets/noPic.png';
import { apiUrl } from '../../globalConstants.ts';

interface Props {
  comment: IComment;
}

const Comment: React.FC<Props> = ({ comment }) => {
  let commentPic = noPic;
  if (comment.image) {
    commentPic = apiUrl + '/' + comment.image;
  }

  return (
    <Grid2 marginBottom={2} padding={2} border={'1px solid black'}>
      <Typography variant="subtitle1" component="p">
        <strong>Author:</strong> {comment.author.toUpperCase()}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        <strong>message: </strong> {comment.message}
      </Typography>
      <CardMedia
        component="img"
        image={commentPic}
        style={{ width: '100px', height: '100px', marginLeft: 'auto' }}
        title={comment.author}
      />
    </Grid2>
  );
};

export default Comment;
