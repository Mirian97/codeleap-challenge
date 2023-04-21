import * as Yup from 'yup'
import messages from './messages'
const { fieldRequired } = messages

export const postSchema = Yup.object().shape({
  title: Yup.string().required(fieldRequired).trim(),
  content: Yup.string().required(fieldRequired).trim()
})
