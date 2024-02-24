import { useState } from "react";

// Initial state for column visibility
const initialColumns = {
  Title: true,
  Categories: true,
  Price: true,
  Date: true,
  Author: true,
  Status: true,
  Action: true,
  // Add more columns as needed
};

// Sample data for the table
const data = [
  {
    Title: "AWAW ERC",
    Categories: "....",
    Price: "12",
    Date: "February 04, 2024",
    Author: "admin",
    Status: "Publish",
    Action: "Edit",
  },
  {
    Title: "teasetr",
    Categories: "....",
    Price: "10",
    Date: "January 31, 2024",
    Author: "admin",
    Status: "Draft",
    Action: "Edit",
  },
  // Add more data as needed
];

// TableData component
const TableData = () => {
  // State to manage column visibility
  const [columns, setColumns] = useState(initialColumns);

  // Function to handle checkbox click to toggle column visibility
  const handleCheckboxClick = (column) => {
    setColumns((prevColumns) => ({
      ...prevColumns,
      [column]: !prevColumns[column],
    }));
  };

  return (
    <>
      {/* Container for the table */}
      <div className="w-[90%] shadow-2xl mx-auto mt-5 h-screen">
        {/* Header section */}
        <div className="m-10 flex items-center justify-between p-2">
          <h3 className="text-black font-bold">Table Title</h3>
          {/* Dropdown for column settings */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              {/* Dropdown icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* SVG path for dropdown icon */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            {/* Dropdown content */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 pe-20 font-bold text-black"
            >
              {/* Dropdown header */}
              <h1>Add or Remove columns</h1>
              <div className="container mx-auto p-4">
                {/* List of checkboxes for column visibility */}
                <li className="flex mb-4 text-black border-red-800 ">
                  {/* Mapping through initialColumns to create checkboxes */}
                  {Object.keys(initialColumns).map((column) => (
                    <label
                      key={column}
                      className="inline-flex items-center mr-2"
                    >
                      {/* Checkbox input */}
                      <input
                        type="checkbox"
                        checked={columns[column]}
                        onChange={() => handleCheckboxClick(column)}
                        className="form-checkbox text-indigo-600 bg-red-700 border-red-600"
                      />
                      {/* Column name */}
                      <span className="ml-2">{column}</span>
                    </label>
                  ))}
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* Table body */}
        <div className="overflow-x-auto text-black">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                {/* Render table headers based on column visibility */}
                {Object.entries(columns).map(([column, isVisible]) =>
                  isVisible ? (
                    <th
                      key={column}
                      className=" py-2 text-left p-9 divide-red-500"
                    >
                      {column}
                    </th>
                  ) : null
                )}
              </tr>
            </thead>
            <tbody>
              {/* Render table rows */}
              {data.map((row, index) => (
                <tr key={index} className="underline">
                  {/* Render table cells based on column visibility */}
                  {Object.entries(columns).map(([column, isVisible]) =>
                    isVisible ? (
                      <td
                        key={column}
                        className="text-left py-2 px-4 divide-red-500"
                      >
                        {/* Render different content based on column */}
                        {column === "Action" ? (
                          // Button for action column
                          <p className="ms-10">
                            <button className="btn btn-primary">
                              {row[column]}
                            </button>
                            {/* Icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              {/* SVG path for icon */}
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                              />
                            </svg>
                          </p>
                        ) : column === "Status" ? (
                          // Button for status column
                          <p>
                            <button className="btn bg-neutral-50 border-lime-400 flex">
                              {/* Button content */}
                              <div className="flex items-center justify-between gap-3">
                                {/* Status text */}
                                <p>{row[column]}</p>
                                {/* Icon */}
                                <p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                  >
                                    {/* SVG path for icon */}
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </p>
                              </div>
                            </button>
                          </p>
                        ) : column === "Title" ? (
                          // Link for title column
                          <p>
                            <a
                              className="text-blue-500 flex  underline"
                              href="#"
                            >
                              {row[column]}
                              {/* Icon */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                {/* SVG path for icon */}
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0"
                                />
                              </svg>
                            </a>
                          </p>
                        ) : (
                          // Render plain text for other columns
                          row[column]
                        )}
                      </td>
                    ) : null
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableData;
