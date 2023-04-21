import * as Yup from 'yup'
import messages from './messages'
const { fieldRequired } = messages

export const usernameSchema = Yup.object().shape({
  username: Yup.string().required(fieldRequired).trim()
})
