interface setToggleModalProps {
  setToggleModal: () => void;
}

const AddTransactionButton = ({ setToggleModal }: setToggleModalProps) => {
  return (
    <button
      onClick={setToggleModal}
      className='h-[50px] w-[200px] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300'
    >
      Add transaction
    </button>
  );
};

export default AddTransactionButton;
