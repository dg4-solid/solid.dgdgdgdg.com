function App() {
  return (
    <main>
      <Header />
      <div id="fact">This is page</div>
      <Footer />
    </main>
  );
}

const target = document.getElementById("app");
const root = ReactDOM.createRoot(target);
root.render(<App />);
