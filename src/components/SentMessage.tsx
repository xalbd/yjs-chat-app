import { MessageProps } from "../types/MessageProps";
import MessageBubble from "./MessageBubble";
import MessageTag from "./MessageTag";

function SentMessage({ message, tag }: MessageProps) {
  return (
    <div className="text-right">
      <MessageBubble message={message} styles="text-black bg-white outline" />
      <MessageTag contents={tag} />
    </div>
  );
}

export default SentMessage;
