import React from "react";

export const CounterComponent = ({ title }: { title: string }) => {
  // state and handler for changing when pressing a button
  const [counterValue, setCounterValue] = React.useState(0);
  const onClickHandler = () => {
    setCounterValue(counterValue + 1);
  };

  return (
    <div className="m-4 p-4 bg-blue border jne jne">
      <h3 className="text-3xl font-bold underline">{title}</h3>
      <p className="text-slate-600 text-normal">Counter value is {counterValue}</p>
      <button className="button" onClick={onClickHandler}>
        ClicK!
      </button>
    </div>
  );
};
