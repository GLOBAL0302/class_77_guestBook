export interface IComment {
  id: string;
  author: string;
  message: string;
  image: string | null;
}

export interface ICommentForm {
  author: string;
  message: string;
  image: File | null;
}
