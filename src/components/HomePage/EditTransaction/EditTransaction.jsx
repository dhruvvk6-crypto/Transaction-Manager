import { useState, useEffect } from "react";
import {  Select, Textarea, TextInput } from "flowbite-react";
import { useDispatch } from "react-redux";
import { editTransaction } from "../../../redux/transaction/transactionSlice.js";
import toast from "react-hot-toast";

export default function EditTransaction({ transaction, onClose }) {
  const [formData, setFormData] = useState({
    dateTime: "",
    amount: "",
    type: "",
    category: "",
    title: "",
    currency: "",
    note: "",
    id: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (transaction) {
      setFormData({ ...transaction });
    }
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { dateTime, amount, type, category, title, currency, note } =
      formData;
    if (
      !dateTime ||
      !amount ||
      !type ||
      !category ||
      !title ||
      !currency ||
      !note
    ) {
      console.log("Validation failed: All fields must be filled.");
      toast.error("Please fill out all fields.");
      return false;
    }
    if (isNaN(amount) || parseFloat(amount) <= 0) {
      console.log("Validation failed: Amount must be a positive number.");
      toast.error("Amount must be a positive number.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(editTransaction(formData, formData.id));
      toast.success("Transaction updated successfully!");
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type="datetime-local"
        name="dateTime"
        value={formData.dateTime}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <TextInput
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <Select
        name="type"
        required
        value={formData.type}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      >
        <option value="">Select Type</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </Select>
      <Select
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      >
        <option value="">Select a Category</option>
        <option value="Shopping">Shopping</option>
        <option value="Travel">Travel</option>
        <option value="Investment">Investment</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Food">Food</option>
        <option value="Education">Education</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Transportation">Transportation</option>
        <option value="Rent">Rent</option>
        <option value="Bonus">Bonus</option>
        <option value="Utilities">Utilities</option>
        <option value="Salary">Salary</option>
        <option value="Freelance">Freelance</option>
        <option value="Gift">Gift</option>
      </Select>
      <TextInput
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <Select
        name="currency"
        required
        value={formData.currency}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      >
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="USD">USD</option>
        <option value="INR">INR</option>
        <option value="GBP">GBP</option>
      </Select>

      <Textarea
        name="note"
        placeholder="Note"
        value={formData.note}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded resize-none"
        required
      />
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => {
            toast.success("testing!");
          }}
          className="mr-2 py-2 px-4 border rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-[#712FFF] text-white py-2 px-4 rounded"
        >
          Update
        </button>
      </div>
    </form>
  );
}
