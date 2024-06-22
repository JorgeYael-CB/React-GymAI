import { useContext, useEffect, useRef, useState } from "react";
import { AlertFormApp, GptMessage, ModalLogin, MyMessage, TextMessageBox, TyPingLoader } from "../../components";
import { AuthContext } from "../../auth";
import { GetMessagesUseCase, SendMessageUseCase } from "../../../core";
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
  const [isLoadingMessages, setIsLoadingMessages] = useState(true);
  const [errorLoadingMessages, setErrorLoadingMessages] = useState<string>();
  const bottomOfPanelRef = useRef<HTMLDivElement>( null );


  useEffect(() => {
    // TODO: http - solicitar los últimos 10 mensajes con su respuesta
    if( !isLogged ) return setIsLoadingMessages(false);

    GetMessagesUseCase({token: token!})
      .then( data => {
        setIsLoadingMessages(false);
        if( data.error ){
          return setErrorLoadingMessages(data.error);
        }

        data.messages!.forEach( msg => {
          setMessages( prevMessages => [...prevMessages, {isGpt: false, text:msg.content}] );
          setMessages( prevMessages => [...prevMessages, {isGpt: true, text:msg.answer}] );
        });
      })
  }, []);

  useEffect(() => {
    if( bottomOfPanelRef && bottomOfPanelRef.current ){
      bottomOfPanelRef.current!.scrollIntoView();
    }
  }, [messages])


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
            {
              !isLoadingMessages
              &&
              <>
              {
                messages.map( (message, index) => (
                  message.isGpt
                    ?
                  (<GptMessage key={index} text={message.text}/>)
                    :
                  (<MyMessage image={ isLogged ? data!.name[0] : 'U' } key={index} text={`${message.text}`}/>)
                ))
              }
                <div ref={ bottomOfPanelRef }></div>
              </>
            }

            {
              !isLoadingMessages &&  messages.length <= 0
              &&
              <GptMessage
                text={`${isLogged
                  ? `Hola ${data!.name}, soy tu asitente de GYM AI, cuando realices una pregunta hazla lo más corta y breve posible para ayudarte de mejor manera :)`
                  : 'Para poder acceder a mandar mensajes debes iniciar sesión.'}`}
              />
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
          errorLoadingMessages
          && <AlertFormApp content={errorLoadingMessages} error/>
        }

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
