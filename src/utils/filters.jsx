export const applyFilters = (transactions, filters) => {
    return transactions.filter((transaction) => {
      const matchesType = filters.type ? transaction.type === filters.type : true;
      const matchesCurrency = filters.currency ? transaction.currency === filters.currency : true;
      const matchesCategory = filters.category ? transaction.category === filters.category : true;
      const matchesTitle = filters.searchTitle
        ? transaction.title.toLowerCase().includes(filters.searchTitle.toLowerCase())
        : true;
  
      return matchesType && matchesCurrency && matchesCategory && matchesTitle;
    });
  };
  