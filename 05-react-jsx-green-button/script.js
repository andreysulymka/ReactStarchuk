const App = ({ initialButtonText, initialButtonClass }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [clasesList, setClasesList] = React.useState(initialButtonClass);

  const onButtonClick = () => {
    setButtonText("Hello from React");
    setClasesList("green-btn");
  };

  return (
    <div className="app">
      <button className={clasesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialButtonClass="" />);
