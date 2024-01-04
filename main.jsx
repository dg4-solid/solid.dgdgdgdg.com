function App() {
  return (
    <div>
      <Header />
      Hello React!
      <Footer />
    </div>
  );
}

const target = document.querySelector("#app");
ReactDOM.render(<App />, target);
