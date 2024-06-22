import { Modal } from "./Modal"


interface Props {
  onCloseModal: ( value: boolean ) => void;
}

export const ModalPayment = ( { onCloseModal }: Props ) => {

  return (
    <Modal
      content='Para acceder a nuestro asistente de GYM AI debes comprar una suscripción.'
      onCloseModal={ onCloseModal }
      succesUrl='/payments'
      title='Desbloquear contenido'
      btnCancelText='Cancelar'
      btnSuccesText='Comprar'
    />
  )
}
