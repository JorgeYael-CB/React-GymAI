import { useContext, useEffect, useState } from "react";
import { GptMessage, ModalLogin, MyMessage, TextMessageBox, TyPingLoader } from "../../components";
import { AuthContext } from "../../auth";



interface Message {
  text: string;
  isGpt: boolean;
}


export const AsistenteDashboardApp = () => {
  const {} = useContext( AuthContext );
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const { isLogged } = useContext(AuthContext);
  const [showModalLogin, setShowModalLogin] = useState(false);


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

    // Todo: use-case

    setIsLoading(false);

    //TODO: añadir el mensaje de isGpt en true
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

        <TextMessageBox
          onSendMessage={ handlePost }
          placeholder={"Escibe lo que deseas traducir"}
          disabled={isLoading}
          // disabledCorrection
        />
      </div>
    </>
  )
}
