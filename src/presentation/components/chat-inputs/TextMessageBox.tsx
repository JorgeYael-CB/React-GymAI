import { FormEvent, useState } from "react";

interface Props {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disabledCorrection?: boolean;
  disabled?: boolean;
}

export const TextMessageBox = ({ onSendMessage, disabledCorrection = false, placeholder = '', disabled }: Props) => {
  const [message, setMessage] = useState('');
  const handleMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim().length <= 0 || disabled) return;

    onSendMessage(message);
    setMessage('');
  };

  return (
    <form
      className="flex flex-row items-center py-2 rounded-xl bg-white w-full px-4"
      onSubmit={handleMessage}
    >
      <div className="flex-grow">
        <div className="relative w-full">
          <input
            autoFocus
            name="message"
            className="py-2 resize-none max-h-40 flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            placeholder={placeholder}
            autoComplete={disabledCorrection ? "on" : "off"}
            autoCorrect={disabledCorrection ? "on" : "off"}
            spellCheck={disabledCorrection ? "true" : "false"}
            value={message}
            onChange={e => setMessage(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <div className="ml-4">
        <button disabled={disabled} className="btn-primary">
          <span className="mr-2 max-lg:hidden">Enviar</span>
          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
}
