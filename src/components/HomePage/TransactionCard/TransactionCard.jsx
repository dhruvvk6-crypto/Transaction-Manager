import { MdDeleteSweep } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeTransaction } from "../../../redux/transaction/transactionSlice.js";
import toast from "react-hot-toast";

const TransactionCard = ({
  dateTime,
  amount,
  type,
  category,
  title,
  currency,
  note,
  id,
  onEdit,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#1B1C20] w-[48%] text-white rounded-lg shadow-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <span
          className={`py-1 px-2 rounded ${
            type === "Income" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {type}
        </span>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-start justify-start">
          <p className="text-sm text-gray-400 mb-2">
            {new Date(dateTime).toLocaleString()}
          </p>
          <p className="text-lg font-semibold mb-2">
            {amount} {currency}
          </p>
          <p className="text-sm text-gray-400 mb-2">Category: {category}</p>
          <p className="text-sm text-gray-400">{note}</p>
        </div>
        <div className="flex items-center justify-center gap-3 self-end">
          <FaEdit size={25} className="cursor-pointer" onClick={onEdit} />
          <MdDeleteSweep
            size={25}
            className="cursor-pointer"
            onClick={() => {
              dispatch(removeTransaction(id));
              toast.success("Transaction Deleted Successfully!");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
