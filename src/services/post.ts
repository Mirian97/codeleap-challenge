import { TPost } from 'types/post'
import api from './api'

export async function getPosts() {
  const { data } = await api.get('/')
  return data
}

export async function createPost(body: Omit<TPost, 'id'>) {
  await api.post('/', { ...body })
}

export async function editPost(id: number, body: Omit<TPost, 'id'>) {
  await api.patch(`/${id}/`, { ...body })
}

export async function deletePost(id: number) {
  await api.delete(`/${id}/`)
}
