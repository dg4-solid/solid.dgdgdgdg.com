function App() {
  return (
    <div>
      <Header />
      <main>This is main.</main>
      <Footer />
    </div>
  );
}

const target = document.querySelector("#app");
ReactDOM.render(<App />, target);
