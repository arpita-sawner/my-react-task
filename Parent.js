import Child from "./Child";

function Parent() {
  const showMessage = () => {
    alert("Message from Parent!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Parent Component</h2>
      <Child onButtonClick={showMessage} />
    </div>
  );
}

export default Parent;
