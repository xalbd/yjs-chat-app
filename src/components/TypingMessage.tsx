import MessageBubble from "./MessageBubble";
import MessageTag from "./MessageTag";
import { MessageProps } from "./ReceivedMessage";

function TypingMessage({ message, tag }: MessageProps) {
  return (
    <div className="self-start">
      <MessageBubble message={message} styles="text-gray-600 bg-gray-300" />
      <MessageTag contents={tag} />
    </div>
  );
}

export default TypingMessage;
