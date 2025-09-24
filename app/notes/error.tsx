// "use client";

// type Props = {
//   error: Error;
// };

// const Error = ({ error }: Props) => {
//   return (
//     <div>
//       <h2>Помилка при завантаженні</h2>
//       <p>{error.message}</p>
//     </div>
//   );
// };

// export default Error;
"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div>
      <p>Could not fetch the list of notes. {error.message}</p>
    </div>
  );
};

export default Error;
