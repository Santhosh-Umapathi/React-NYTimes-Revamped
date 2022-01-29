import { useAtoms } from "../../recoil/hooks";

const NextIcon = ({ onClick = () => {} }) => {
  const {
    state: { darkMode },
  } = useAtoms();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490.8 490.8"
      className={`w-4 h-4 hover:opacity-70 transition-opacity cursor-pointer ${
        darkMode ? "fill-bgLight" : "fill-bgDark"
      }`}
      onClick={onClick}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M135.685 3.128c-4.237-4.093-10.99-3.975-15.083.262-3.992 4.134-3.992 10.687 0 14.82l227.115 227.136-227.136 227.115c-4.237 4.093-4.354 10.845-.262 15.083 4.093 4.237 10.845 4.354 15.083.262.089-.086.176-.173.262-.262l234.667-234.667c4.164-4.165 4.164-10.917 0-15.083L135.685 3.128z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M128.133 490.68a10.667 10.667 0 0 1-7.552-18.219l227.136-227.115L120.581 18.232c-4.171-4.171-4.171-10.933 0-15.104 4.171-4.171 10.933-4.171 15.104 0l234.667 234.667c4.164 4.165 4.164 10.917 0 15.083L135.685 487.544a10.663 10.663 0 0 1-7.552 3.136z"
      />
    </svg>
  );
};

export default NextIcon;
