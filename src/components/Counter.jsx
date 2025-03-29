import Button from "./Button";

const Counter = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <div>
      <h2>Counter</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Button label="+" handleClick={handleIncrement} />
        <p>{count}</p>
        <Button label="-" handleClick={handleDecrement} />
      </div>
    </div>
  );
};

export default Counter;
