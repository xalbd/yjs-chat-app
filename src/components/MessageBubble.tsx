interface MessageBubbleProps {
  message: string;
  styles: string;
}

function MessageBubble({ message, styles }: MessageBubbleProps) {
  return (
    <p
      className={`mx-4 mt-2 mb-1 px-3 py-2 [overflow-wrap:anywhere] inline-block max-w-sm rounded-2xl ${styles}`}
    >
      {message}
    </p>
  );
}

export default MessageBubble;
