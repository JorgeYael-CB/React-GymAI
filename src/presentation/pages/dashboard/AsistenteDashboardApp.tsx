import { useContext, useEffect, useState } from "react";
import { AlertFormApp, GptMessage, ModalLogin, MyMessage, TextMessageBox, TyPingLoader } from "../../components";
import { AuthContext } from "../../auth";
import { SendMessageUseCase } from "../../../core";



interface Message {
  text: string;
  isGpt: boolean;
}


export const AsistenteDashboardApp = () => {
  const { isLogged, token } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();


  useEffect(() => {
    // TODO: http - solicitar los últimos 10 mensajes
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
      // todo: eliminar el último mensaje del arreglo y validar que no sea el token expirado, que tenga un USER_VIP
      //You do not have access to this content
      return setIsLoading(false);
    };

    //TODO: añadir el mensaje de isGpt en true
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
      <div className="chat-container">
        <div className="chat-messages">
          <div className="grid grid-cols-12 gap-y-2">

            {/* TODO: iterar sobre los mensajes enviados anteriormente (obtener los últimos 10) */}
            <GptMessage text={`Bienvenido de nuevo!`}/>

            {
              messages.map( (message, index) => (
                message.isGpt
                  ?
                (<GptMessage key={index} text={message.text}/>)
                  :
                (<MyMessage key={index} text={`${message.text}`}/>)
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
