function App() {
  return (
    <main>
      <Header />
      <section className="firstview">
        <div className="bg-graphic"></div>
        <h1 className="title">Solid Point</h1>
      </section>
      <Footer />
    </main>
  );
}

const target = document.getElementById("app");
const root = ReactDOM.createRoot(target);
root.render(<App />);
