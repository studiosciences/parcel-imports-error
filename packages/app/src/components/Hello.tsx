
type HelloProps = {
  message: string;
};

export function Hello({ message }: HelloProps) {

  return (
    <h1>
     {message}
    </h1>
  );
}
