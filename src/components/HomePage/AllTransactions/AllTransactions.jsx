import { useSelector } from "react-redux";
import TransactionCard from "../TransactionCard/TransactionCard";
import Filtering_Sidebar from "../SideBar/SideBar";
import { applyFilters } from "../../../utils/filters";
import { useState } from "react";
import AddTransaction from "../AddTransaction/AddTransaction";
import { Modal, Button, Drawer } from "flowbite-react";
import EditTransaction from "../EditTransaction/EditTransaction";

const AllTransactions = () => {
  const { transactions } = useSelector((state) => state.transactions);
  const filters = useSelector((state) => state.filters);

  const filteredTransactions = applyFilters(transactions, filters);

  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleEditClick = (transaction) => {
    setSelectedTransaction(transaction);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedTransaction(null);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div id="AllTransactions" className="w-screen max-w-full px-0 tbPortrait:px-8 flex flex-col sm:flex-row items-start justify-between gap-10 mt-24">
      <div className="w-[35%] tbPortrait:w-[30%] hidden sm:block">
        <Filtering_Sidebar />
      </div>
      <div className="w-full sm:w-[50%] order-2 sm:order-1">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-semibold text-center">
            All <span className="text-[#712FFF]">Transactions</span> Overview
          </h1>
          <div className="w-full flex items-center justify-between flex-wrap">
            {filteredTransactions.map((transaction) => (
              <TransactionCard
                key={transaction.id}
                {...transaction}
                onEdit={() => handleEditClick(transaction)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[18%] tbPortrait:w-[15%] hidden sm:block sm:order-2">
        <div className="w-full flex items-center justify-between">
          <AddTransaction />
        </div>
      </div>
      <div className="sm:hidden w-full flex justify-between items-center px-4 mt-4">
        <Button gradientMonochrome="info" onClick={handleSidebarToggle}>
          Filter Transactions
        </Button>
        <AddTransaction />
      </div>

      {/* Edit Transaction Modal */}
      {isEditModalOpen && selectedTransaction && (
        <Modal show={isEditModalOpen} onClose={handleCloseEditModal} className="z-[200]">
          <Modal.Header>Edit Transaction</Modal.Header>
          <Modal.Body>
            <EditTransaction
              transaction={selectedTransaction}
              onClose={handleCloseEditModal}
            />
          </Modal.Body>
          <Modal.Footer>
            <h1 className="text-2xl mx-auto font-semibold">
              Click <span className="text-[#712FFF]">Edit</span> to Update your{" "}
              <span className="text-[#712FFF]">Transaction!</span>{" "}
            </h1>
          </Modal.Footer>
        </Modal>
      )}

      {/* Mobile Sidebar */}
      <Drawer open={isSidebarOpen} onClose={handleSidebarClose}>
        <Filtering_Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
      </Drawer>
    </div>
  );
};

export default AllTransactions;
