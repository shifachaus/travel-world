function Message({ message }) {
  return (
    <p className="text-zinc-200 text-md">
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
