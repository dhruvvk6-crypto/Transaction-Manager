import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useSelector } from "react-redux";
import PieChart from "../../../utils/PieChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement 
);

const Visualizations = () => {
  const transactions = useSelector((state) => state.transactions.transactions);


  // Process data for line chart
  const monthlyData = transactions.reduce((acc, transaction) => {
    if (!transaction.dateTime) {
      console.error("Transaction missing dateTime:", transaction);
      return acc;
    }

    const date = new Date(transaction.dateTime);
    if (isNaN(date.getTime())) {
      console.error("Invalid dateTime:", transaction.dateTime);
      return acc;
    }

    const month = date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
    if (!acc[month]) acc[month] = { income: 0, expense: 0 };
    if (transaction.type.toLowerCase() === "income") {
      acc[month].income += transaction.amount;
    } else if (transaction.type.toLowerCase() === "expense") {
      acc[month].expense += transaction.amount;
    }
    return acc;
  }, {});

  const months = Object.keys(monthlyData).sort(
    (a, b) => new Date(a) - new Date(b)
  );
  const incomeValues = months.map((month) => monthlyData[month]?.income || 0);
  const expenseValues = months.map((month) => monthlyData[month]?.expense || 0);

  const lineData = {
    labels: months,
    datasets: [
      {
        label: "Income",
        borderColor: "#4caf50",
        data: incomeValues,
        fill: false,
        tension: 0.1,
        backgroundColor: "rgba(76,175,80,0.2)",
        pointRadius: 5, 
        pointHoverRadius: 8, 
      },
      {
        label: "Expense",
        borderColor: "#f44336",
        data: expenseValues,
        fill: false,
        tension: 0.1,
        backgroundColor: "rgba(244,67,54,0.2)",
        pointRadius: 5, 
        pointHoverRadius: 8, 
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month",
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount",
        },
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  // Process data for pie charts
  const categories = {};
  const incomeCategories = {};
  const expenseCategories = {};
  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((transaction) => {
    const { type, category, amount } = transaction;

    if (type === "Income") {
      totalIncome += amount;
      if (incomeCategories[category]) {
        incomeCategories[category] += amount;
      } else {
        incomeCategories[category] = amount;
      }
    } else if (type === "Expense") {
      totalExpense += amount;
      if (expenseCategories[category]) {
        expenseCategories[category] += amount;
      } else {
        expenseCategories[category] = amount;
      }
    }

    if (categories[category]) {
      categories[category] += amount;
    } else {
      categories[category] = amount;
    }
  });

  const pieDataOverall = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [totalIncome, totalExpense],
        backgroundColor: ["#4caf50", "#f44336"],
        hoverBackgroundColor: ["#66bb6a", "#e57373"],
      },
    ],
  };

  const pieDataIncome = {
    labels: Object.keys(incomeCategories),
    datasets: [
      {
        data: Object.values(incomeCategories),
        backgroundColor: ["#66bb6a", "#81c784", "#a5d6a7", "#c8e6c9"],
        hoverBackgroundColor: ["#4caf50", "#66bb6a", "#81c784", "#a5d6a7"],
      },
    ],
  };

  const pieDataExpense = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        data: Object.values(expenseCategories),
        backgroundColor: ["#ef5350", "#e57373", "#ef9a9a", "#ffcdd2"],
        hoverBackgroundColor: ["#f44336", "#ef5350", "#e57373", "#ef9a9a"],
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="visualizations mt-20 min-h-[170vh]">
      <div className="w-full flex flex-col items-center justify-center ">
      <h2 className="text-3xl mb-6 text-center">Monthly Income and Expenses</h2>
        <div
          className="chart-container"
          style={{ position: "relative", height: "300px", width: "600px" }}
        >
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex items-center justify-around w-full px-8">
          <div
            className="chart-container"
            style={{ position: "relative", height: "18rem", width: "18rem" }}
          >
            <h3 className="text-2xl mb-4 text-center font-semibold">
              Overall Distribution
            </h3>
            <PieChart data={pieDataOverall} options={pieOptions} />
          </div>
          <div
            className="chart-container"
            style={{ position: "relative", height: "18rem", width: "18rem" }}
          >
            <h3 className="text-[1.2rem] font-semibold mb-4 text-center">
              Income Distribution by Category
            </h3>
            <PieChart data={pieDataIncome} options={pieOptions} />
          </div>
        </div>
        <div
          className=" chart-container w-full flex flex-col items-center justify-center"
          style={{ position: "relative", height: "18rem", width: "23rem" }}
        >
        <h3 className="text-2xl font-semibold">Expense Distribution by Category</h3>
          <PieChart data={pieDataExpense} options={pieOptions} />
        </div>
      </div>
    </div>
  );
};

export default Visualizations;
