import { ToastContainerProps, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type TypeNotify = 'success' | 'error' | 'warning' | 'info' | 'none'

export const useToastify = () => {
  const generalConfig: ToastContainerProps = {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true
  }

  const toastify = (type: TypeNotify, message: string) => {
    switch (type) {
      case 'success':
        toast.success(message, {
          toastId: message,
          ...generalConfig
        })
        break
      case 'error':
        toast.error(message, {
          toastId: message,
          ...generalConfig
        })
        break
      case 'warning':
        toast.warn(message, {
          toastId: message,
          ...generalConfig
        })
        break
      case 'info':
        toast.info(message, {
          toastId: message,
          ...generalConfig
        })
        break
      default:
        toast(message, {
          toastId: message,
          ...generalConfig
        })
        break
    }
  }

  return toastify
}
