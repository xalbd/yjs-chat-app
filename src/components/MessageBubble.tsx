interface MessageBubbleProps {
  message: string;
  styles: string;
}

function MessageBubble({ message, styles }: MessageBubbleProps) {
  return (
    <p
      className={`mx-4 mt-2 mb-1 p-2 break-words inline-block max-w-sm text-lg rounded-lg ${styles}`}
    >
      {message}
    </p>
  );
}

export default MessageBubble;
