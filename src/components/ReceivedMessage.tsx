import { MessageProps } from "../types/MessageProps";
import MessageBubble from "./MessageBubble";
import MessageTag from "./MessageTag";

function ReceivedMessage({ message, tag }: MessageProps) {
  return (
    <div className="self-start">
      <MessageBubble message={message} styles="text-white bg-blue-500" />
      <MessageTag contents={tag} />
    </div>
  );
}

export default ReceivedMessage;
