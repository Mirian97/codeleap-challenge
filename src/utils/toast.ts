import { toast } from 'react-toastify'

export function messageSuccess(messageContent: string) {
  toast.success(messageContent, {
    position: 'top-center',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      fontSize: '1.6rem'
    }
  })
}

export function messageError(messageContent: string) {
  toast.error(messageContent, {
    position: 'top-center',
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      fontSize: '1.6rem'
    }
  })
}
