type EmptyMessageProps = {
  message: string;
};

export default function EmptyMessage({ message }: EmptyMessageProps) {
  return <div className="text-center text-2xl font-bold my-10">{message}</div>;
}
