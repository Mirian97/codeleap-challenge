import { TPost, TPostResponse, TPostWithoutId } from 'types/post'
import { requests } from './requests'

export const getPosts = (): Promise<TPostResponse> => {
  return requests.get('/')
}

export const createPost = (body: Omit<TPost, 'id'>): Promise<void> => {
  return requests.post('/', { ...body })
}

export const editPost = (payload: {
  id: number
  body: TPostWithoutId
}): Promise<void> => {
  const { id, body } = payload
  return requests.patch(`/${id}/`, { ...body })
}

export const deletePost = (payload: { id: number }): Promise<void> => {
  const { id } = payload
  return requests.delete(`/${id}/`)
}
