export const SortButtonComponent = ({ sortState, handleFunction }) => {
  return (
    <div>
      <button onClick={handleFunction}>
        {sortState ? "Show newest" : "Show oldest"}
      </button>
    </div>
  );
};
