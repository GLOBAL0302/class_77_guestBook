import './App';
import CommentForm from './components/CommentForm/CommentForm.tsx';
import { Container } from '@mui/material';
import Comments from './Features/Comments/Comments.tsx';

const App = () => {
  return (
    <Container>
      <Comments />
      <CommentForm />
    </Container>
  );
};

export default App;
