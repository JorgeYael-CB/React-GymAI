import { Modal } from "./Modal";


interface Props {
  content?: string;
  title?: string;
  onCloseModal: ( value: boolean ) => void;
}


export const ModalLogin = ( { onCloseModal, title = 'Inicia sesión', content = 'Inicia sesión o crea una cuenta para continuar' }: Props ) => {

  return (
    <Modal btnCancelText='Cancelar' btnSuccesText='Login' content={content} onCloseModal={ onCloseModal } title={ title } succesUrl='/auth/login'/>
  )
}
