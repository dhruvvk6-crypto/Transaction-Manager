// "use client";
// import { Sidebar, Label, Radio, Button } from "flowbite-react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setTypeFilter,
//   setCurrencyFilter,
//   setCategoryFilter,
//   resetFilters,
// } from "../../../redux/filter/filterSlice.js";

// export default function Filtering_Sidebar() {
//   const dispatch = useDispatch();
//   const filters = useSelector((state) => state.filters);

//   const handleTypeChange = (e) => {
//     if (e.target.value === "All") {
//       dispatch(setTypeFilter(""));
//     } else {
//       dispatch(setTypeFilter(e.target.value));
//     }
//   };

//   const handleCurrencyChange = (e) => {
//     if (e.target.value === "All") {
//       dispatch(setCurrencyFilter(""));
//     } else {
//       dispatch(setCurrencyFilter(e.target.value));
//     }
//   };

//   const handleCategoryChange = (e) => {
//     if (e.target.value === "All") {
//       dispatch(setCategoryFilter(""));
//     } else {
//       dispatch(setCategoryFilter(e.target.value));
//     }
//   };

//   const handleResetFilters = () => dispatch(resetFilters());

//   return (
//     <Sidebar aria-label="Default sidebar example" className="w-full">
//       <Sidebar.Items>
//         <Sidebar.ItemGroup>
//           <div className="flex items-center justify-between w-full">
//             <h2 className="text-lg font-semibold my-4">Filter Transactions</h2>
//             <Button
//               className="mt-4"
//               gradientMonochrome="failure"
//               onClick={handleResetFilters}
//             >
//               Reset Filters
//             </Button>
//           </div>

//           <h3 className=" text-lg font-medium my-2">Type</h3>
//           <div className="flex flex-col gap-2">
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="type"
//                 value="All"
//                 checked={filters.type === ""}
//                 onChange={handleTypeChange}
//               />
//               All
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="type"
//                 value="Income"
//                 checked={filters.type === "Income"}
//                 onChange={handleTypeChange}
//               />
//               Income
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="type"
//                 value="Expense"
//                 checked={filters.type === "Expense"}
//                 onChange={handleTypeChange}
//               />
//               Expense
//             </Label>
//           </div>

//           <h3 className=" text-lg font-medium my-2">Currency</h3>
//           <div className="flex flex-col gap-2">
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="currency"
//                 value="All"
//                 checked={filters.currency === ""}
//                 onChange={handleCurrencyChange}
//               />
//               All
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="currency"
//                 value="USD"
//                 checked={filters.currency === "USD"}
//                 onChange={handleCurrencyChange}
//               />
//               USD
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="currency"
//                 value="EUR"
//                 checked={filters.currency === "EUR"}
//                 onChange={handleCurrencyChange}
//               />
//               EUR
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="currency"
//                 value="GBP"
//                 checked={filters.currency === "GBP"}
//                 onChange={handleCurrencyChange}
//               />
//               GBP
//             </Label>
//             {/* Add more currencies as needed */}
//           </div>

//           <h3 className="text-lg font-medium my-2">Category</h3>
//           <div className="flex flex-col gap-2">
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="All"
//                 checked={filters.category === ""}
//                 onChange={handleCategoryChange}
//               />
//               All
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Shopping"
//                 checked={filters.category === "Shopping"}
//                 onChange={handleCategoryChange}
//               />
//               Shopping
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Travel"
//                 checked={filters.category === "Travel"}
//                 onChange={handleCategoryChange}
//               />
//               Travel
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Food"
//                 checked={filters.category === "Food"}
//                 onChange={handleCategoryChange}
//               />
//               Food
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Investment"
//                 checked={filters.category === "Investment"}
//                 onChange={handleCategoryChange}
//               />
//               Investment
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Entertainment"
//                 checked={filters.category === "Entertainment"}
//                 onChange={handleCategoryChange}
//               />
//               Entertainment
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Education"
//                 checked={filters.category === "Education"}
//                 onChange={handleCategoryChange}
//               />
//               Education
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Healthcare"
//                 checked={filters.category === "Healthcare"}
//                 onChange={handleCategoryChange}
//               />
//               Healthcare
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Transportation"
//                 checked={filters.category === "Transportation"}
//                 onChange={handleCategoryChange}
//               />
//               Transportation
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Rent"
//                 checked={filters.category === "Rent"}
//                 onChange={handleCategoryChange}
//               />
//               Rent
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Bonus"
//                 checked={filters.category === "Bonus"}
//                 onChange={handleCategoryChange}
//               />
//               Bonus
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Utilities"
//                 checked={filters.category === "Utilities"}
//                 onChange={handleCategoryChange}
//               />
//               Utilities
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Salary"
//                 checked={filters.category === "Salary"}
//                 onChange={handleCategoryChange}
//               />
//               Salary
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Freelance"
//                 checked={filters.category === "Freelance"}
//                 onChange={handleCategoryChange}
//               />
//               Freelance
//             </Label>
//             <Label className="flex items-center gap-2">
//               <Radio
//                 name="category"
//                 value="Gift"
//                 checked={filters.category === "Gift"}
//                 onChange={handleCategoryChange}
//               />
//               Gift
//             </Label>
//           </div>
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>
//   );
// }
"use client";
import { Sidebar, Label, Radio, Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTypeFilter,
  setCurrencyFilter,
  setCategoryFilter,
  resetFilters,
} from "../../../redux/filter/filterSlice.js";

export default function Filtering_Sidebar({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleTypeChange = (e) => {
    if (e.target.value === "All") {
      dispatch(setTypeFilter(""));
    } else {
      dispatch(setTypeFilter(e.target.value));
    }
  };

  const handleCurrencyChange = (e) => {
    if (e.target.value === "All") {
      dispatch(setCurrencyFilter(""));
    } else {
      dispatch(setCurrencyFilter(e.target.value));
    }
  };

  const handleCategoryChange = (e) => {
    if (e.target.value === "All") {
      dispatch(setCategoryFilter(""));
    } else {
      dispatch(setCategoryFilter(e.target.value));
    }
  };

  const handleResetFilters = () => dispatch(resetFilters());

  return (
    <Sidebar
      aria-label="Default sidebar example"
      className={`w-full fixed top-0 left-0 h-full z-[100] bg-white dark:bg-gray-800 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } mt-16 sm:mt-0 sm:relative sm:translate-x-0 sm:w-auto`}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <div className="flex items-center justify-between w-full">
            <h2 className="text-lg font-semibold my-4">Filter Transactions</h2>
            <Button
              className="mt-4"
              gradientMonochrome="failure"
              onClick={handleResetFilters}
            >
              Reset Filters
            </Button>
          </div>

          <h3 className=" text-lg font-medium my-2">Type</h3>
          <div className="flex flex-col gap-2">
            <Label className="flex items-center gap-2">
              <Radio
                name="type"
                value="All"
                checked={filters.type === ""}
                onChange={handleTypeChange}
              />
              All
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="type"
                value="Income"
                checked={filters.type === "Income"}
                onChange={handleTypeChange}
              />
              Income
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="type"
                value="Expense"
                checked={filters.type === "Expense"}
                onChange={handleTypeChange}
              />
              Expense
            </Label>
          </div>

          <h3 className=" text-lg font-medium my-2">Currency</h3>
          <div className="flex flex-col gap-2">
            <Label className="flex items-center gap-2">
              <Radio
                name="currency"
                value="All"
                checked={filters.currency === ""}
                onChange={handleCurrencyChange}
              />
              All
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="currency"
                value="USD"
                checked={filters.currency === "USD"}
                onChange={handleCurrencyChange}
              />
              USD
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="currency"
                value="EUR"
                checked={filters.currency === "EUR"}
                onChange={handleCurrencyChange}
              />
              EUR
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="currency"
                value="GBP"
                checked={filters.currency === "GBP"}
                onChange={handleCurrencyChange}
              />
              GBP
            </Label>
            {/* Add more currencies as needed */}
          </div>

          <h3 className="text-lg font-medium my-2">Category</h3>
          <div className="flex flex-col gap-2">
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="All"
                checked={filters.category === ""}
                onChange={handleCategoryChange}
              />
              All
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Shopping"
                checked={filters.category === "Shopping"}
                onChange={handleCategoryChange}
              />
              Shopping
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Travel"
                checked={filters.category === "Travel"}
                onChange={handleCategoryChange}
              />
              Travel
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Food"
                checked={filters.category === "Food"}
                onChange={handleCategoryChange}
              />
              Food
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Investment"
                checked={filters.category === "Investment"}
                onChange={handleCategoryChange}
              />
              Investment
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Entertainment"
                checked={filters.category === "Entertainment"}
                onChange={handleCategoryChange}
              />
              Entertainment
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Education"
                checked={filters.category === "Education"}
                onChange={handleCategoryChange}
              />
              Education
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Healthcare"
                checked={filters.category === "Healthcare"}
                onChange={handleCategoryChange}
              />
              Healthcare
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Transportation"
                checked={filters.category === "Transportation"}
                onChange={handleCategoryChange}
              />
              Transportation
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Rent"
                checked={filters.category === "Rent"}
                onChange={handleCategoryChange}
              />
              Rent
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Bonus"
                checked={filters.category === "Bonus"}
                onChange={handleCategoryChange}
              />
              Bonus
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Utilities"
                checked={filters.category === "Utilities"}
                onChange={handleCategoryChange}
              />
              Utilities
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Salary"
                checked={filters.category === "Salary"}
                onChange={handleCategoryChange}
              />
              Salary
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Freelance"
                checked={filters.category === "Freelance"}
                onChange={handleCategoryChange}
              />
              Freelance
            </Label>
            <Label className="flex items-center gap-2">
              <Radio
                name="category"
                value="Gift"
                checked={filters.category === "Gift"}
                onChange={handleCategoryChange}
              />
              Gift
            </Label>
          </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <Button
        className="mt-4 sm:hidden"
        gradientMonochrome="failure"
        onClick={onClose}
      >
        Close
      </Button>
    </Sidebar>
  );
}
