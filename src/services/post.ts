import { TPost, TPostResponse } from 'types/post'
import { requests } from './requests'

export const getPosts = (): Promise<TPostResponse> => {
  return requests.get('/')
}

export const createPost = (body: Omit<TPost, 'id'>): Promise<void> => {
  return requests.post('/', { ...body })
}

export const editPost = (id: number, body: Omit<TPost, 'id'>): Promise<void> => {
  return requests.patch(`/${id}/`, { ...body })
}

export const deletePost = (id: number): Promise<void> => {
  return requests.delete(`/${id}/`)
}
