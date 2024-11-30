type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className="text-red-500 my-10 text-xl text-center">{message}</p>;
}
