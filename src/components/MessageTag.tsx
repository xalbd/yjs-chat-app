interface MessageTagProps {
  contents: string;
}

function MessageTag({ contents }: MessageTagProps) {
  return <p className="mx-4 px-2 text-gray-500">{contents}</p>;
}

export default MessageTag;
