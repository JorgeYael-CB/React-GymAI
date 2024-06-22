import { useContext, useEffect, useState } from "react";
import { AlertFormApp, GptMessage, ModalLogin, MyMessage, TextMessageBox, TyPingLoader } from "../../components";
import { AuthContext } from "../../auth";
import { SendMessageUseCase } from "../../../core";
import { ModalPayment } from "../../components/modals/ModalPayment";



interface Message {
  text: string;
  isGpt: boolean;
}


export const AsistenteDashboardApp = () => {
  const { isLogged, token, data } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();


  useEffect(() => {
    // TODO: http - solicitar los últimos 10 mensajes con su respuesta
  }, []);


  const handlePost = async( text:string ) => {
    // TODO: verificar que sin este logeado
    if( !isLogged ){
      return setShowModalLogin(true);
    };

    setIsLoading( true );
    setMessages( prevMessages => [...prevMessages, { isGpt: false, text }]);

    // TODO: use-case
    const data = await SendMessageUseCase({message: text, token: token!});

    if( data.error ){
      setErrorMessage(data.error);
      setMessages(prevMessages => prevMessages.slice(0, -1));
      if( data.error.includes('You do not have access to this content') ){
        setShowModalPayment(true);
      }
      return setIsLoading(false);
    };

    setMessages( prevMessages => [...prevMessages, {isGpt: true, text: data.answer!}] );
    setIsLoading(false);
  }


  return (
    <>
      {
        showModalLogin
        &&
        <ModalLogin onCloseModal={ setShowModalLogin } content='Para acceder a tu asistente virtual debes iniciar sesión o crear una cuenta'/>
      }

      {
        showModalPayment
        &&
        <ModalPayment onCloseModal={ setShowModalPayment }/>
      }

      <div className="chat-container">
        <div className="chat-messages">
          <div className="grid grid-cols-12 gap-y-2">

            {/* TODO: iterar sobre los mensajes enviados anteriormente (obtener los últimos 10) */}
            <GptMessage
              text={`${isLogged
                ? `Hola, soy tu asitente de GYM AI, bienvenido de nuevo ${data!.name}, cuando realices una pregunta hazla lo más corta y breve posible para ayudarte de mejor manera :)`
                : 'Para poder acceder a mandar mensajes debes iniciar sesión.'}`}
            />

            {
              messages.map( (message, index) => (
                message.isGpt
                  ?
                (<GptMessage key={index} text={message.text}/>)
                  :
                (<MyMessage image={ isLogged ? data!.name[0] : 'U' } key={index} text={`${message.text}`}/>)
              ))
            }

            {
              isLoading
              &&
              <div className="col-start-1 col-end-12 fade-in">
                <TyPingLoader/>
              </div>
            }

          </div>
        </div>

        {
          errorMessage
          && <AlertFormApp content={errorMessage} error/>
        }

        <TextMessageBox
          onSendMessage={ handlePost }
          placeholder={'Envía un mensaje a tú asistente virtual'}
          disabled={isLoading}
          // disabledCorrection
        />
      </div>
    </>
  )
}
