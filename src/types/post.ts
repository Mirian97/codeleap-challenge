export type TPost = {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export type TSubmitPost = Pick<TPost, 'title' | 'content'>

export type TPostResponse = {
  results: Array<TPost>
}
