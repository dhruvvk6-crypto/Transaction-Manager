import { createSlice } from "@reduxjs/toolkit";
import initialTransactions from "../../data/initialTransactions.js";

const initialState = {
  transactions: initialTransactions,
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    fetchTransactionsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTransactionsSuccess: (state, action) => {
      state.transactions = action.payload;
      state.loading = false;
    },
    fetchTransactionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    editTransaction: (state, action) => {
      const index = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload.id
      );
      if (index !== -1) {
        state.transactions[index] = action.payload;
      }
    },
    removeTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
  },
});

export const {
  fetchTransactionsStart,
  fetchTransactionsSuccess,
  fetchTransactionsFailure,
  addTransaction,
  editTransaction,
  removeTransaction,
} = transactionSlice.actions;

export default transactionSlice.reducer;
