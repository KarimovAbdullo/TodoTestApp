import React from "react";

interface Props {
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
  remaining: number;
  onClearCompleted: () => void;
}

const Filters: React.FC<Props> = ({
  filter,
  setFilter,
  remaining,
  onClearCompleted,
}) => {
  return (
    <div className="filters">
      <span>{remaining} items left</span>
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <button className="clear" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default Filters;
