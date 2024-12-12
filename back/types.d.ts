interface IComment{
  id:string
  author: string,
  message:string,
  image:string | null
}

export type ICommentWithOutID = Omit<IComment, "id">;