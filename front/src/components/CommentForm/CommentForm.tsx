import { useState } from 'react';
import { ICommentForm } from '../../types';
import { Button, Grid2, TextField } from '@mui/material';
import FileInput from '../UI/FileInput/FileInput.tsx';

const initialState:ICommentForm = {
  author:"",
  message:"",
  image:null
}

const CommentForm = () => {

  const  [commentForm, setCommentForm] = useState(initialState);

  const onSubmitForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setCommentForm((prevState)=>({
      ...prevState,
      [name]:value
    }));
  }

  const onChangeFile = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;

    if(files){
      setCommentForm((prevState)=>({
        ...prevState,
        [name]: files[0] || null
      }))
    }
  }


  return (
    <>
      <Grid2
        container
        gap={2}
        flexDirection="column"
        component="form"
        onSubmit={onSubmitForm}>
          <TextField
            required
            label="Author"
            onChange={onChangeInput}
            id="author"
            name="author"
            variant="outlined"
            color="primary"
            fullWidth/>

          <TextField
            required
            label="message"
            onChange={onChangeInput}
            id="message"
            name="message"
            variant="outlined"
            color="primary"
            fullWidth/>

         <FileInput name="image" label="image" onGetFile={onChangeFile}/>
          <Button sx={{marginLeft:"auto"}} type="submit" variant="contained" color="primary">
            Add Comment
          </Button>
      </Grid2>
    </>
  );
};

export default CommentForm;